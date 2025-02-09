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
      <h2 className="text-2xl font-bold mb-4">Optimize and Compress Images Online</h2>
      <p>Use our free image resizer to enhance performance and reduce file sizes effortlessly:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Improve website load speed</li>
        <li>Optimize images for social media</li>
        <li>Reduce email attachment sizes</li>
        <li>Prepare images for documents and reports</li>
        <li>Faster file transfers</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Supported Image Formats</h3>
      <p>We support JPG, PNG, GIF, BMP, WebP, and HEIC formats.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Simple drag-and-drop upload</li>
        <li>Customizable compression settings</li>
        <li>Batch processing for multiple images</li>
        <li>Instant downloads with no sign-up required</li>
      </ul>
      
      <div className="faq mt-8">
        <h4 className="text-xl font-bold mb-3">Frequently Asked Questions (FAQ)</h4>
        <div className="question border-b py-3">
          <h5 className="text-lg font-semibold">Is this tool completely free?</h5>
          <p>Yes! Our image resizer is 100% free with no hidden costs or registration required.</p>
        </div>
        <div className="question border-b py-3">
          <h5 className="text-lg font-semibold">Can I compress multiple images at once?</h5>
          <p>Absolutely! Our batch processing feature lets you upload and resize multiple images in one go.</p>
        </div>
        <div className="question border-b py-3">
          <h5 className="text-lg font-semibold">Will my image lose quality after compression?</h5>
          <p>No, our tool optimizes images while preserving high-quality resolution.</p>
        </div>
        <div className="question py-3">
          <h5 className="text-lg font-semibold">Which formats does this tool support?</h5>
          <p>We support JPG, PNG, GIF, BMP, WebP, and HEIC formats for maximum compatibility.</p>
        </div>
      </div>
      
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Online Image Compressor",
          "description": "A free online tool to compress, resize, and optimize images for better performance.",
          "applicationCategory": "Image Optimization Tools",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Supports multiple image formats",
            "Adjustable compression settings",
            "Batch image processing",
            "Quick and easy downloads"
          ],
          "useCase": [
            "Web Development",
            "Social Media Optimization",
            "Content Creation"
          ]
        })
      }} />
    </section>
        
    </div>
  );
};

export default ImageResizer;
