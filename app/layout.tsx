import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashid Engineering",
  description: "Created By Ashar Ullah Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monda.variable} antialiased font-monda`}>
        {children}
      </body>
    </html>
  );
}
