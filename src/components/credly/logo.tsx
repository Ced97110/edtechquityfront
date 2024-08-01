'use client'
import { useEffect } from "react";

const CredlyBadge = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    // Function to remove border from iframe and adjust size
    const adjustIframe = () => {
      const iframe = document.querySelector('iframe[data-share-badge-id="962cccd1-cec5-46db-8e62-cf0859db627c"]') as HTMLIFrameElement;
      if (iframe) {
        iframe.style.border = "none";
        iframe.style.width = "70%"; // Adjust width as necessary
        iframe.style.height = "50%"; // Adjust height as necessary
        iframe.style.maxWidth = "50px"; // Set a max width to control size
      }
    };

    // Try to adjust the iframe after it has loaded
    script.onload = () => {
      setTimeout(adjustIframe, 500); // Adjust timeout as necessary
    };

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', border:'none' }}> {/* Center the badge */}
      <div
        data-iframe-width="120"
        data-iframe-height="150"
        data-share-badge-id="962cccd1-cec5-46db-8e62-cf0859db627c"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </div>
  );
};

export default CredlyBadge;
