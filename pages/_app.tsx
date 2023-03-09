import '@/styles/chrome-bug.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { NextPageWithLayout } from './page';

interface IAppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: IAppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
