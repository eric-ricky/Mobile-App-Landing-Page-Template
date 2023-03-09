import { IPageMeta } from '@/types';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Header from './header';

const Footer = dynamic(() => import('./footer'));

interface IProps {
  children: ReactNode;
  meta?: IPageMeta;
}

const URL = 'https://sparkblog.vercel.app';

const MainLayout = ({ children, meta: pageMeta }: IProps) => {
  const router = useRouter();
  const meta = {
    title: 'PesaMate',
    description: 'Budget Tracker App',
    cardImage: `${URL}/images/product-preview.jpeg`,
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://wecodepro.top${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@username" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>

      <div className={` min-h-screen flex flex-col body`}>
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
