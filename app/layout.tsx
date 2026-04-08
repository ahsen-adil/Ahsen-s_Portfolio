import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import Chat from "./components/Chat";

// Premium modern fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col font-[family-name:var(--font-inter)]"
        suppressHydrationWarning
      >
        <LoadingScreen />
        <Chat />
        {children}
      </body>
    </html>
  );
}
