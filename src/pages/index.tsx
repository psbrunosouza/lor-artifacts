import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from "../layout";
import {Button} from "../components/button";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Keyboard, Navigation, Pagination, Virtual} from "swiper";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

const Home: NextPage = () => {
    const artifacts = [
      {
          id: 1,
          path: '',
          image: 'https://i.pinimg.com/564x/48/4b/2d/484b2df3212d3728ff8c3cc6a469d750.jpg'
      },
      {
          id: 2,
          path: '',
          image: 'https://www.ufrgs.br/tesauros/_acervo/image/2019/12/img-0019471-4f1144751b.jpg'
      },
      {
          id: 3,
          path: '',
          image: 'https://i0.wp.com/www.valinor.com.br/wp-content/uploads/2010/05/narya1.jpg?resize=281%2C307&ssl=1'
      }
  ]

  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Artifacts</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="w-full md:w-1/2 m-auto flex flex-col justify-center py-16 px-8">
          <h3 className="text-center bg-clip-text bg-gradient-to-l text-transparent from-lordarken-300 via-lordarken-400 to-lordarken-500">Collection</h3>
          <p className="pt-8">
              We aim to be the biggest wiki about all artifacts from Tolkien universe, but initially,
              we are gonna talk only about the rings of power. Its features, skills, bearers,
              story and introduce a timeline to tell more about its paths over the middle earth.
          </p>
          <div className="flex justify-center pt-8">
              <Button classes="w-full md:w-auto">Explore</Button>
          </div>
          <div className="flex justify-center mt-16">
              <Swiper
                  breakpoints={{
                      "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 10,
                      },
                      "@0.75": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                      },
                      "@1.00": {
                          slidesPerView: 3,
                          spaceBetween: 40,
                      },
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                  modules={[Pagination, Keyboard]}
                  centeredSlides={true}
                  keyboard={{
                      enabled: true,
                  }}
                  pagination={{
                      clickable: true,
                  }}
                  navigation={true}
                  virtual={true}
              >
                  {
                      artifacts.map((artifact, index, ) => (
                          <SwiperSlide virtualIndex={index} key={artifact.id}>
                              <img alt={artifact.path} className="w-[280px] h-[320px] rounded object-cover" src={artifact.image}/>
                          </SwiperSlide>
                      ))
                  }
              </Swiper>
          </div>
      </main>
    </Layout>
  )
}

export default Home
