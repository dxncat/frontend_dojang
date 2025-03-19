import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "./config/fonts";

export const metadata: Metadata = {
  title: {
    template: '%s - Dojang',
    default: 'Home - Dojang'
  },
  description: 'Una academia de artes marciales en la que podrás aprender y practicar Taekwondo nunca fue tan fácil. ¡Ven a Dojang!'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bodyFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
