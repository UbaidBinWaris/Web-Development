import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import { supabase } from "@/lib/supabase";

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
//   callbacks: {
//     async signIn({ user, account }) {
//       // Save to Supabase on first sign in
//       try {
//         const { data, error } = await supabase
//           .from('users')
//           .upsert({
//             github_id: account.providerAccountId,
//             name: user.name,
//             email: user.email,
//           }, {
//             onConflict: 'github_id', // avoid duplicates
//           });

//         if (error) throw error;
//         return true;
//       } catch (err) {
//         console.error("Supabase insert error:", err);
//         return false;
//       }
//     },
//   },
})

export { handler as GET, handler as POST }