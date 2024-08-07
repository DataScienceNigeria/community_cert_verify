import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/SideBar";
import SessionWrapper from "@/components/SessionWrapper";
import { ThemeProvider } from "next-themes";

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600']
});

export const metadata = {
  title: 'Page Title',
  description: 'Page Description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`${poppins.variable}`}>
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
