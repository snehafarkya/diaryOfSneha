import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AI Diary of Sneha Farkya🧡",
  description: "Hey, I am Sneha and this is my AI diary. Here I share my journey, projects, and insights into the world of content creation and frontend development.",
icons: {
    icon: "/favicon.png", // 👈 or use .png or other supported formats
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  );
}
