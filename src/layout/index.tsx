import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import { useRouter } from 'next/router';

interface ILayout {
  children?: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const router = useRouter();

  return (
    <>
      <Header></Header>
      {router.pathname === '/' ? <Banner></Banner> : null}
      <div
        className={
          router.pathname === '/'
            ? 'min-h-[calc(100vh)]'
            : 'min-h-[calc(100vh-64px)]'
        }
      >
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
