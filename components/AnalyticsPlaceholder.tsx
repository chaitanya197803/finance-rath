"use client";

import React from "react";
import Script from "next/script";

interface AnalyticsProps {
  gaMeasurementId?: string;
  googleAdsId?: string;
  metaPixelId?: string;
}

export const AnalyticsPlaceholder: React.FC<AnalyticsProps> = ({
  gaMeasurementId = "G-PLACEHOLDER_GA4",
  googleAdsId = "AW-PLACEHOLDER_ADS",
  metaPixelId = "PLACEHOLDER_PIXEL"
}) => {
  return (
    <>
      {/* Google Analytics 4 Script Placeholder */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', { page_path: window.location.pathname });
            gtag('config', '${googleAdsId}');
          `
        }}
      />

      {/* Meta Pixel Placeholder */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `
        }}
      />
    </>
  );
};
