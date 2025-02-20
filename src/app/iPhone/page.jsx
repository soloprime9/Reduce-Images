"use client";
import React from "react";

const iPhone16eBlog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Blog Header */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-blue-400">iPhone 16e Live — Latest News & Reactions to Apple's New iPhone</h1>
        <p className="text-gray-300 mt-2">Everything you need to know about the iPhone 16e launch.</p>
      </header>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Apple Revealed the iPhone 16e</h2>
        <p className="text-gray-300">
          Apple revealed the iPhone 16e, the "newest member of the family" in its lineup yesterday, February 19. Although it was long believed to be known as the iPhone SE 4, this rebrand makes it more in line with the iPhone 16 family. Preorders begin on <strong>February 21</strong> with a starting price of <strong>$599 / AU$999</strong>, with general availability set for <strong>February 28</strong>.
        </p>

        <h3 className="text-xl font-semibold text-blue-400 mt-4">Key Features of iPhone 16e:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Display:</strong> 6.1-inch OLED with edge-to-edge design</li>
          <li><strong>Processor:</strong> A18 chip with 6-core CPU and 4-core GPU</li>
          <li><strong>Camera:</strong> 48MP Fusion camera with integrated 2x telephoto</li>
          <li><strong>Apple Intelligence:</strong> Photo Clean Up, Image Playground, Writing Tools, new Siri, ChatGPT, and Visual Intelligence</li>
          <li><strong>Battery:</strong> Lasts up to 6 hours longer than iPhone 11, up to 12 hours longer than all generations of iPhone SE</li>
          <li><strong>Storage Options:</strong> 128GB, 256GB, and 512GB</li>
          <li><strong>Colors Available:</strong> Black and White</li>
          <li><strong>Price:</strong> Starts at <strong>$599 / AU$999</strong></li>
          <li><strong>Availability:</strong> Preorder starts <strong>February 21</strong>, General sale from <strong>February 28</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-400 mt-6">Why is the iPhone 16e Important?</h3>
        <p className="text-gray-300 mt-2">
          Given the fierce competition among the best cheap phones, the iPhone 16e helps Apple stay relevant in the budget segment. It's been nearly 3 years since the last SE model, and this release promises modern features at a more affordable price.
        </p>
      </div>
    </div>
  );
};

export default iPhone16eBlog;
