import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectTToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    const session_user = await User.findOne({
        email: session.user.email
    })
    session.user.id = session_user._id.tostring();
    return session;
  },
  async signIn({ profile }) {
    try {
      await connectTToDB();

      // Check if user already exists in our database
      const user = await User.findOne({ email: profile.email });

      if (!user) {
        // Create a new user
        const newUser = await User.create({
          email: profile.email,
          username: profile.name.replace(" ","").toLowerCase(),
          image: profile.image,
        });
    }
    return true;
    } catch (error) {
      console.error("Error connecting to DB:", error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };