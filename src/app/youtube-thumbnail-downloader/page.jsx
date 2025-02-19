'use client';
import React, { useState } from "react";
import axios from "axios";

const ThumbnailDownloader = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnails, setThumbnails] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setThumbnails(null);

    try {
      const response = await axios.post("https://back-night.vercel.app/api/get-thumbnails", {
        videoUrl,
      });
      setThumbnails(response.data.thumbnails);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleDownload = async (url) => {
    try {
      const response = await axios.get("https://back-night.vercel.app/api/download", {
        params: { url },
        responseType: "blob",
      });

      // Create a blob URL and trigger download
      const blob = new Blob([response.data], { type: response.headers["content-type"] });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `thumbnail-${Date.now()}.webp`;
      link.click();
    } catch (error) {
      alert("Failed to download the image.");
    }
  };

  return (
    <div className="text-start p-2" >
     <head>
  <title>YouTube Thumbnail Downloader</title>
  <meta name="description" content="This application lets you download thumbnails of all quality. Just paste the URL of the YouTube video below and click Get Thumbnail Image." />
  <meta name="keywords" content="HD YouTube Thumbnail Downloader, HD thumbnails, YouTube thumbnails, download YouTube thumbnails, free thumbnail downloader, content creator tools, SEO tools, high quality thumbnails, YouTube thumbnail grabber, online thumbnail downloader, video thumbnail downloader" />
</head>

<header className="lg:flex lg:justify-between text-center pb-5">
  <h1 className="text-2xl font-bold">
    <a href="https://www.okhatrimaza.shop" className="text-2xl font-bold">YouTube Thumbnail Downloader</a>
  </h1>
  <div className="flex justify-center lg:gap-8 gap-2">
    <a href="https://www.okhatrimaza.shop/about" className="hover:text-blue-600">About Us</a>
    <a href="https://www.okhatrimaza.shop/privacy" className="hover:text-blue-600">Policy</a>
    <a href="https://www.okhatrimaza.shop/contact" className="hover:text-blue-600">Contact Us</a>
  </div>
</header>

      <div className="border-2 mb-40"></div>

      <div className="text-center m-5 ">
            <p className="text-evenly lg:mr-20 lg:ml-20 mb-6">Just Paste YouTube Video Link in Box, click on Get Thumbnail Button. A while you can download High Quality YouTube Thumbnail According to Your Choice</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter YouTube Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full p-2 mb-5 border-2"
              />
              <br />
              <button type="submit" className="p-2 border-2">
                Get Thumbnails
              </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            {thumbnails && (
              <div className="mt-4 ">
                <h2>Thumbnails:</h2>
                {Object.entries(thumbnails).map(([key, url]) => (
                  <div key={key} className="mb-10 ">
                    <div className="grid justify-center mb-4 h-5">
                    <p className="font-bold border-2 w-20  text-black bg-blue-200 ">{key.toUpperCase()}</p>
                    </div>
                    <img src={url} alt={key} className="w-400 h-80 block m-auto border-2 rounded-sm shadow-md border-blue-500" />
                    <button
                      onClick={() => handleDownload(url)}
                      className="p-2 mt-5 pointer border-4 bg-yellow-300 font-bold rounded-sm border-black"
                    >
                      Download {key.toUpperCase()} Thumbnail
                    </button>
                  </div>
                ))}
              </div>
            )}
        </div>
    </div>
  );
};

export default ThumbnailDownloader;
