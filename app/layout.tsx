import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import localFont from 'next/font/local';

const fontNovaticaSemiBold = localFont({
  src: './assets/fonts/BC-Novatica-SemiBold.otf',
  style: 'normal',
  variable: '--font-novatica-semi-bold',
});

const fontMontrealBook = localFont({
  src: './assets/fonts/ppneuemontreal-book.otf',
  style: 'normal',
  variable: '--font-montreal-book',
});

const fontMontrealMedium = localFont({
  src: './assets/fonts/ppneuemontreal-medium.otf',
  style: 'normal',
  variable: '--font-montreal-medium',
});

const fontTwoTextItalic = localFont({
  src: './assets/fonts/TwoText-Italic.ttf',
  style: 'normal',
  variable: '--font-two-text-italic',
});


export const metadata: Metadata = {
  title: "Brutal Gym",
  description:
    "Brutal Gym: A high-intensity fitness gym offering a variety of training modalities including weightlifting, spinning, and more. Perfect for all fitness levels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"       className={`${fontNovaticaSemiBold.variable} ${fontMontrealBook.variable} ${fontMontrealMedium.variable} ${fontTwoTextItalic.variable}`}
>
      <body >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
