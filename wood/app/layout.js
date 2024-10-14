import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AMCC Islamabad",
  description: "Al-Ubaid Maintainenance and Construction Company Islanabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="border-[20px] border-[#65360D] {`${geistSans.variable} ${geistMono.variable} antialiased`} "
      >
        <MainHeader/>
        <div>
        {children}
        </div>
        <MainFooter/>
      </body>
    </html>
  );
}
