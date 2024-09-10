// src/app/layout.tsx or src/pages/_app.tsx
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SessionProvider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="mx-auto max-w-8xl bg-red-50">
            <Navbar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
