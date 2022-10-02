import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/globals.scss';
import 'keen-slider/keen-slider.min.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
