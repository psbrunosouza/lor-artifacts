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

      <main className="min-h-[420px] w-screen flex justify-center pt-16 pb-24">
          <div className="w-1/2">
              <h3 className="text-center bg-clip-text bg-gradient-to-l text-transparent from-lordarken-300 via-lordarken-400 to-lordarken-500">Collection</h3>
              <p className="pt-4">
                  We aim to be the biggest wiki about all artifacts from Tolkien universe, but initially,
                  we are gonna talk only about the rings of power. Its features, skills, bearers,
                  story and introduce a timeline to tell more about its paths over the middle earth.
              </p>
              <div className="flex justify-center pt-4">
                  <Button>Explore</Button>
              </div>

              <div className="flex justify-center mt-14">
                  <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
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
          </div>
      </main>
    </Layout>
  )
}

export default Home
