import '@/styles/globals.css'
import { useEffect } from 'react'
import Router from 'next/router'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
    return (
      <div>
        <Component {...pageProps} />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L7EE4M8YP0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L7EE4M8YP0');
          `}
        </Script>
      </div>
    )
}
