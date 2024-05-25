import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { Room } from "./room";

import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using Fabric.js and Liveblocks for real-time collaboration.",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={cn("bg-primary-grey-200", workSans.className)}>
        <Room>{children}</Room>
      </body>
    </html>
  );
};

export default RootLayout;
