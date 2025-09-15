"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/provider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const mostrarHeader = pathname !== "/forca"; // header só aparece se não estiver em /forca

  return (
    <html lang="pt-br">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900`}>
        <Providers>
          {mostrarHeader && (
            <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Lucas Ribeiro D&apos;Azevedo</h1>
              <nav className="space-x-4">
                <Link href="/" className="hover:underline">
                  Mini Bio
                </Link>
                <Link href="/forca" className="hover:underline">
                  Jogo da Forca
                </Link>
              </nav>
            </header>
          )}
          <main className="p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
