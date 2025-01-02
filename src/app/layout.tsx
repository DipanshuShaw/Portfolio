import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Rowdies, Yatra_One, Kanit } from "next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  variable: "--rowdies",
  weight:  "300"
})
const yatra = Yatra_One({
  subsets: ["latin"],
  variable: "--yatra-One",
  weight:  "400"
})
const kanit = Kanit({
  subsets: ["latin"],
  variable: "--kanit",
  weight:  "300"
})



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipanshu Shaw",
  description: "Portfolio of Dipanshu Shaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${rowdies.className}`}
      >
        {children}
      </body>
    </html>
  );
}
