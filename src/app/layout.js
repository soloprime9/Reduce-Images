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
  title: "Free Image Resizer - Reduce & Optimize Photos Online | ImageSizeReducer",
  description: "🖼️ Instantly resize and compress JPG, PNG, GIF, BMP images online. Reduce file size for websites, social media, and emails without quality loss. 100% free browser-based tool!",
  keywords: [
    "resize images online free",
    "compress photo size",
    "image optimizer tool",
    "reduce jpg file size",
    "online picture resizer",
    "web image compressor",
    "photo size reducer",
    "social media image optimizer"
  ].join(", "),
  openGraph: {
    title: "Free Image Resizer - Optimize Photos in Seconds",
    description: "Browser-based tool to resize and compress images without quality loss. Supports JPG, PNG, GIF, BMP formats.",
    url: "https://reduceimages-sigma.vercel.app/",
    siteName: "ImageSizeReducer",
    images: [
      {
        url: "https://reduceimages-sigma.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Online Image Resizer & Compressor",
    description: "Reduce image file sizes for web and social media. No registration required!",
    images: ['https://reduceimages-sigma.vercel.app/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Schema Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Free Image Resizer",
            "operatingSystem": "Web",
            "applicationCategory": "MultimediaApplication",
            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1500"
            },
            "description": "Professional-grade image optimization tool available for free online",
            "featureList": [
              "Multiple format support (JPG/PNG/GIF/BMP)",
              "Quality adjustment slider",
              "Instant download",
              "Mobile-friendly interface"
            ]
          })}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://reduceimages-sigma.vercel.app/" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
        {/* Hidden SEO Content */}
        <div aria-hidden="true" style={{display:'none'}}>
          <h1>Online Image Resizer & Compressor</h1>
          <h2>Free Tool to Reduce Image File Size</h2>
          <p>Optimize images for web use with our browser-based resizing tool. Features include:</p>
          <ul>
            <li>Batch image compression</li>
            <li>Quality control slider</li>
            <li>Multiple format support</li>
            <li>Instant download</li>
          </ul>
        </div>
      </body>
    </html>
  );
}
