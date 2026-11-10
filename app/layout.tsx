import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import Chat from "./components/Chat";

// Modern premium professional typography (variable fonts)
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahsen's Portfolio | AI Engineer & Developer",
  description: "AI Engineer building intelligent systems that automate the future. Full Stack Development, Generative AI, and Automation expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col font-sans bg-[#090A0C] text-[#F4F4F6]"
        suppressHydrationWarning
      >
        <LoadingScreen />
        <Chat />
        {children}
      </body>
    </html>
  );
}
