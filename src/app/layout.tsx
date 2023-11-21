import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@/styles/fade.css";
import "@/styles/scrollbar.css";
import NavbarMain from "@/components/Navbar/Navbar";
import ico from "./ico.png";
import FooterMain from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "@gonzaqepasa",
  description: "Generated by create next app",
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/portafolio%2Fico.png?alt=media&token=9e1fa5d2-d706-4db5-92c1-36a078bebeb6",
  },
  openGraph: {
    title: "@gonzaqepasa",
    description: "Bienvenido a mi portafolio",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/sodapop-9f1d7.appspot.com/o/foto%20de%20perfil%20ln.jpg?alt=media&token=345ec14e-b56a-41cf-adca-8bc0562c39aa",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} scrollbar-custom min-h-screen bg-neutral-900 text-neutral-300`}
      >
        <NavbarMain />
        {children}
        <FooterMain/>
      </body>
    </html>
  );
}
