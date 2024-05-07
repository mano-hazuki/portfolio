import { classnames } from "@/lib/classnames";
import type { Metadata } from "next";
import { Josefin_Sans, Josefin_Slab } from "next/font/google";

import "./globals.css";
import "./reset.css";

const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600", "700"],
  variable: "--font-josefin-slab",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Shohei Yamagiwa",
  description: "Portfolio site of Shohei Yamagiwa",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body className={classnames(josefinSlab.variable, josefinSans.variable)}>{children}</body>
    </html>
  );
}
