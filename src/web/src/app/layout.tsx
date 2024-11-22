import Footer from "@app/_features/footer/Footer";
import Header from "@app/_features/header/Header";
import "@app/globals.css";
import "@ui/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AyStudio",
  description: "AyStudio for every Programmer and Company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
