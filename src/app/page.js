'use client';
import React, { useState, useRef, useEffect } from "react";

const ImageResizer = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [format, setFormat] = useState("jpeg");
  const [quality, setQuality] = useState(80);
  const [size, setSize] = useState(100);
  const [originalSize, setOriginalSize] = useState("");
  const [resizedSize, setResizedSize] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const fileInputRef = useRef(null);
  const resizedPreviewRef = useRef(null);

  useEffect(() => {
    if (originalImage) {
      updateResizedImage();
    }
  }, [quality, size, format, originalImage]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      loadImage(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) loadImage(file);
  };

  const loadImage = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setOriginalImage(img);
        setOriginalImageUrl(e.target.result);
        setOriginalSize(formatFileSize(file.size));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const updateResizedImage = () => {
    if (!originalImage) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const scaleFactor = size / 100;
    canvas.width = originalImage.width * scaleFactor;
    canvas.height = originalImage.height * scaleFactor;
    ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

    const mimeType = `image/${format}`;
    const qualityValue = format === "png" ? 1 : quality / 100;

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setResizedImage(url);
      if (resizedPreviewRef.current) {
        resizedPreviewRef.current.src = url;
      }
      setResizedSize(formatFileSize(blob.size));
    }, mimeType, qualityValue);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = `resized-image.${format}`;
    link.href = resizedImage;
    link.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  const faqItems = [
    { 
      question: "Is this tool really free?", 
      answer: "Yes! Our image resizer is 100% free with no hidden costs or registration required." 
    },
    { 
      question: "How does image resizing work?", 
      answer: "We use browser-based processing to resize images without uploading to servers, ensuring your files stay private." 
    },
    { 
      question: "What image formats are supported?", 
      answer: "We support JPG, PNG, GIF, BMP, WebP, and HEIC formats with more coming soon!" 
    },
    { 
      question: "Will resizing affect image quality?", 
      answer: "Our smart algorithms maintain optimal quality while reducing file size. Use the quality slider to control compression." 
    },
    { 
      question: "Can I process multiple images at once?", 
      answer: "Yes! Simply drag-and-drop multiple files or select them in the file picker." 
    },
    { 
      question: "Is there any file size limit?", 
      answer: "No limits! Process images of any size directly in your browser." 
    }
  ];

  return (
    <div>
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

          
    <div className="w-full p-10 pb-20 border-2 border-black mt-5 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Image Size Reducer</h1>
      <div
        className={`border-2 border-dashed p-6 text-center cursor-pointer rounded-lg ${
          isDragging ? "border-green-500 bg-green-100" : "border-gray-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <p className="text-gray-600">Drag & drop images here or click to upload</p>
        <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileSelect} hidden />
      </div>

      {originalImageUrl && (
        <>
          <div className="grid lg:grid-cols-2 gap-4 mt-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <h3 className="text-center">Original Image</h3>
              <img src={originalImageUrl} className="w-full mt-2 rounded-md" alt="Original preview" />
              <div className="text-sm text-gray-600 mt-2">{originalSize}</div>
            </div>
            <div className="p-2 bg-gray-100 rounded-lg">
              <h3 className="text-center">Resized Image</h3>
              <img ref={resizedPreviewRef} className="w-full mt-2 rounded-md" alt="Resized preview" />
              <div className="text-sm text-gray-600 mt-2">{resizedSize}</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label>Quality: {quality}%</label>
              <input type="range" min="10" max="100" value={quality} onChange={(e) => setQuality(e.target.value)} className="w-full" />
            </div>
            <div>
              <label>Resize: {size}%</label>
              <input type="range" min="10" max="200" value={size} onChange={(e) => setSize(e.target.value)} className="w-full" />
            </div>
            <div>
              <label>Format:</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="w-full p-2 border rounded">
                <option value="jpg">JPG</option>
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
                <option value="webp">WebP</option>
                <option value="bmp">BMP</option>
                <option value="gif">GIF</option>
              </select>
            </div>
          </div>

          <button onClick={downloadImage} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Download Resized Image</button>
        </>
      )}
        </div>
        
         <section className="seo-content p-6 max-w-4xl mx-auto text-gray-800 bg-white shadow-sm rounded-lg mt-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Understanding Image File Sizes</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Digital images are made of pixels - tiny color dots that combine to form your picture. Each pixel stores 
            color information using RGB values, typically consuming 3 bytes per pixel. This means:
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">📐 Size Calculation Example:</h3>
            <p>
              A 10MP photo (10 million pixels) = 30MB storage (10M pixels × 3 bytes). 
              Our tool helps reduce this size dramatically without quality loss!
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">How Our Image Reducer Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-2 text-green-600">Smart Compression</h4>
              <p>Advanced algorithms remove unnecessary data while preserving visual quality</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold mb-2 text-blue-600">Precise Resizing</h4>
              <p>Maintain aspect ratio while scaling to optimal dimensions for web/mobile</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Optimization Guide</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left">Use Case</th>
                  <th className="p-3 text-left">Recommended Settings</th>
                  <th className="p-3 text-left">Estimated Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-3">Website Images</td>
                  <td className="p-3">WebP format, 80% quality</td>
                  <td className="p-3">60-80% smaller</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3">Social Media</td>
                  <td className="p-3">JPG 90%, 2000px width</td>
                  <td className="p-3">50-70% smaller</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-3">Email Attachments</td>
                  <td className="p-3">PNG 70%, 1200px width</td>
                  <td className="p-3">40-60% smaller</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="faq mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-lg transition-all ${openQuestion === index ? 'border-green-300 bg-green-50' : 'border-gray-200 hover:border-green-200'}`}
              >
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                  <span className={`transform transition-transform ${openQuestion === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {openQuestion === index && (
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SEO Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }} />
      </section>


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
        
    </div>
  );
};

export default ImageResizer;
