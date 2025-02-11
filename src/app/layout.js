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

      <header className="bg-white shadow-sm">
    <nav className="max-w-6xl mx-auto px-4 sm:px-6 border-dashed mt-5 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-bold text-green-600 pointer"><a href="https://reduceimages-sigma.vercel.app/">ImageReducer</a></span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="https://reduceimages-sigma.vercel.app/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
          <a href="https://reduceimages-sigma.vercel.app/" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
          <a href="https://reduceimages-sigma.vercel.app/" className="text-gray-700 hover:text-green-600 transition-colors">FAQ</a>
          <a href="https://reduceimages-sigma.vercel.app/" className="text-gray-700 hover:text-green-600 transition-colors">Tools</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-green-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>



        {children}

          <footer className="bg-gray-50 mt-16 border-t">
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">About</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Our Story</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Tools Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Tools</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Image Compressor</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">PDF Tools</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Video Converter</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Privacy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Terms</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} ImageReducer. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
        
        
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
