import React, { useEffect } from "react";

const ThumbnailDownloader = () => {
  useEffect(() => {
    window.location.replace("https://nightf-qn3y.vercel.app/");
  }, []);

  return (
    <div className="text-start p-2">
      Welcome to Download Youtube Thumbnails Free of Cost
    </div>
  );
};

export default ThumbnailDownloader;
