import React, { useEffect } from "react";

const GTM_ID = "GTM-MTK5Z86X";

const GTM = () => {
  useEffect(() => {
    // Inject the GTM script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);

    // Add the noscript element
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertAdjacentElement("afterbegin", noscript);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

export default GTM;
