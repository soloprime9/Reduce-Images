import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
      <p className="text-sm text-gray-600 mb-6">Last updated: February 19, 2025</p>
      <p>Please read these terms and conditions carefully before using Our Service.</p>
      
      <h2 className="text-xl font-bold mt-6">Interpretation and Definitions</h2>
      
      <h3 className="text-lg font-semibold mt-4">Interpretation</h3>
      <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>
      
      <h3 className="text-lg font-semibold mt-4">Definitions</h3>
      <ul className="list-disc pl-6">
        <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
        <li><strong>Country:</strong> Uttar Pradesh, India</li>
        <li><strong>Company:</strong> Image Reducer</li>
        <li><strong>Device:</strong> Any device that can access the Service, such as a computer, cellphone, or digital tablet.</li>
        <li><strong>Service:</strong> Refers to the Website.</li>
        <li><strong>Website:</strong> <a href="https://reduceimages-sigma.vercel.app/" className="text-blue-500 underline">Image Reducer</a></li>
        <li><strong>You:</strong> The individual or entity accessing the Service.</li>
      </ul>
      
      <h2 className="text-xl font-bold mt-6">Acknowledgment</h2>
      <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company.</p>
      
      <h2 className="text-xl font-bold mt-6">Links to Other Websites</h2>
      <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
      
      <h2 className="text-xl font-bold mt-6">Termination</h2>
      <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason.</p>
      
      <h2 className="text-xl font-bold mt-6">Limitation of Liability</h2>
      <p>The entire liability of the Company shall be limited to the amount paid by You through the Service or $100 USD.</p>
      
      <h2 className="text-xl font-bold mt-6">Governing Law</h2>
      <p>The laws of the Country shall govern these Terms.</p>
      
      <h2 className="text-xl font-bold mt-6">Changes to These Terms and Conditions</h2>
      <p>We reserve the right to modify these Terms at any time at Our sole discretion.</p>
    </div>
  );
};

export default TermsAndConditions;
