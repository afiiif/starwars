import { ReactNode } from 'react';
import Footer from './footer';
import Nav from './nav';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />

      <main className="max-w-4xl mx-auto px-3 py-8">
        {children}
      </main>

      <Footer />
    </>
  );
}
