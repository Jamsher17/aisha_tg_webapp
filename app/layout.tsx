import type { Metadata } from "next";
import { Dekko } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const dekko = Dekko({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aisha App",
  description: "Created by Envision",
  icons: {
    icon: "/Header/aishaIcon.png",
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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={dekko.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
