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

        <section className="seo-content mt-10">
      <h2>How to Reduce Image File Size Online</h2>
      <p>Our free image resizer helps you optimize photos for:</p>
      <ul>
        <li>Website performance improvement</li>
        <li>Social media optimization</li>
        <li>Email attachments</li>
        <li>Document preparation</li>
      </ul>
      
      <h3>Supported Formats</h3>
      <p>JPG, PNG, GIF, BMP, and WebP formats</p>
      
      <div className="faq">
        <h4>FAQ</h4>
        <div className="question">
          <h5>Is this tool really free?</h5>
          <p>Yes! 100% free with no registration required.</p>
        </div>

        
      </div>
    </section>
    </div>
  );
};

export default ImageResizer;
