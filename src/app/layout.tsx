import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@/styles/fade.css";
import "@/styles/scrollbar.css";
import NavbarMain from "@/components/Navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} scrollbar-custom bg-neutral-900 text-neutral-300`}
      >
        <NavbarMain />
        {children}
      </body>
    </html>
  );
}
