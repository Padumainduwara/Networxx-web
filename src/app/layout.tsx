// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/ui/lenis-provider";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NETWORXX - Modern Secure Solutions",
  description: "A scroll-driven 3D experience for Cyber Security Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <LenisProvider>
          <CustomCursor /> 
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}