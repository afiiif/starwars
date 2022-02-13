import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './footer';
import Nav from './nav';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="author" content="Muhammad Afifudin" />
        <meta key="title-meta" property="og:title" content="StarWars" />
        <title key="title">StarWars</title>
      </Head>

      <Nav />

      <main className="max-w-4xl mx-auto px-3 py-8 md:px-6 min-h-[calc(100vh_-_182px)] md:min-h-[calc(100vh_-_160px)]">
        {children}
      </main>

      <Footer />
    </>
  );
}
