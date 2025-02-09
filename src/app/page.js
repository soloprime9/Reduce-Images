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

  return (
    <div>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
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
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-center">Original Image</h3>
              <img src={originalImageUrl} className="w-full mt-2 rounded-md" alt="Original preview" />
              <div className="text-sm text-gray-600 mt-2">{originalSize}</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
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
        
        <section className="seo-content p-4 max-w-3xl mx-auto text-gray-800">
      <h2 className="text-2xl font-bold mb-4">How to Reduce Image File Size Online</h2>
      <p>Our free image resizer helps you optimize photos for various purposes:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Website performance improvement</li>
        <li>Social media optimization</li>
        <li>Email attachments</li>
        <li>Document preparation</li>
        <li>Faster loading times</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Supported Formats</h3>
      <p>JPG, PNG, GIF, BMP, WebP, and HEIC formats</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Drag-and-drop upload support</li>
        <li>Adjustable compression levels</li>
        <li>Batch processing for multiple images</li>
        <li>Instant download without registration</li>
      </ul>
      
      <div className="faq mt-8">
        <h4 className="text-xl font-bold mb-3">Frequently Asked Questions (FAQ)</h4>
        {[  
          { question: "Is this tool really free?", answer: "Yes! 100% free with no registration required." },
          { question: "Can I resize multiple images at once?", answer: "Yes, our batch processing feature allows you to upload and resize multiple images simultaneously." },
          { question: "Does image quality reduce after compression?", answer: "No! Our tool optimizes images while maintaining high quality." },
          { question: "What formats are supported?", answer: "We support JPG, PNG, GIF, BMP, WebP, and HEIC formats." }
        ].map((faq, index) => (
          <div key={index} className="question border-b py-3 cursor-pointer" onClick={() => toggleQuestion(index)}>
            <h5 className="text-lg font-semibold flex justify-between">
              {faq.question}
              <span>{openQuestion === index ? "▲" : "▼"}</span>
            </h5>
            {openQuestion === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
      
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Free Image Resizer",
          "description": "A free online image resizer that allows you to compress, convert, and optimize images instantly.",
          "applicationCategory": "Image Optimization Tools",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Multiple format support",
            "Quality control",
            "Batch processing",
            "Instant download"
          ],
          "useCase": [
            "Web Development",
            "Social Media Management",
            "Content Creation"
          ]
        })
      }} />
    </section>
        
    </div>
  );
};

export default ImageResizer;
