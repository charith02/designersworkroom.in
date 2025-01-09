import React from "react";

const GTM = () => {
    React.useEffect(() => {
        // Insert the GTM script
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WGDXT8XN');
        `;
        document.head.appendChild(script);

        // Clean up script on unmount
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WGDXT8XN"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
        </noscript>
    );
};

export default GTM;
