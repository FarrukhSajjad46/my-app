import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  theme: "light" | "dark";
}

export const metadata: Metadata = {
  title: "Farrukh Sajjad",
  description: "Welcome To Web Development Platform",
};

export default function RootLayout({ children, theme }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${theme}-theme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
