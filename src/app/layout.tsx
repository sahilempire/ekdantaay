import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "एकदंताय - Smile & Dental Care | Dr. Divya Bharti",
  description: "Complete dental care for every smile. Pain-free treatment, modern equipment, and expert dental specialists in Sawai Madhopur, Rajasthan. Book your appointment today!",
  keywords: "dental clinic, dentist, dental care, Sawai Madhopur, Rajasthan, Dr. Divya Bharti, root canal, dental implants, braces, cosmetic dentistry",
  authors: [{ name: "Dr. Divya Bharti" }],
  openGraph: {
    title: "एकदंताय - Smile & Dental Care",
    description: "Your Smile Our Priority! Complete dental care for every smile.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
