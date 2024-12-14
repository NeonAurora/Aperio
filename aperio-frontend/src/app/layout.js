import React from "react";
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Box } from "@mui/material";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Aperio",
  description: "Keep your pace with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Box sx={{ display: "flex", minHeight: '100vh' }}>
          <Sidebar />
          <Box component="main" sx={{ flex: 1, padding: 2 }}>
            {children}
          </Box>
        </Box>
        <Footer />
      </body>
    </html>
  );
}
