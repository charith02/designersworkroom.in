import React from "react";

const Analytics = () => {
    React.useEffect(() => {
        // Insert Google Analytics script
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-DJN72XJD04";
        document.head.appendChild(script);

        const scriptInline = document.createElement("script");
        scriptInline.type = "text/javascript";
        scriptInline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DJN72XJD04');
        `;
        document.head.appendChild(scriptInline);

        // Clean up scripts on unmount
        return () => {
            document.head.removeChild(script);
            document.head.removeChild(scriptInline);
        };
    }, []);

    return null;
};

export default Analytics;
