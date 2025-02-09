import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resize Images Online - Resize JPG, BMP, GIF, PNG images",
  description: "Resize JPG, PNG, GIF, or BMP images online free. Reduce image size to share it with friends or upload it to your social networks or websites",
  keywords: "images resizer, resize images, photo resizer, resize photo, reduce images, reduce images online, reduce an image, reduce an image online, resize online, resize images online, resize an image, reduce size, image, images, images reducer, reduce photos, reduce photos online, reduce a photo, reduce a photo online, resize photos online, resize a photo, reduce file size, improve file size, photo, photos, photos reducer, photos resizer, resize, resizer, reducer, online, dpi, inches, centimeters, printing size, dots per inch, free"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
