import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from "../layout";
import {Button} from "../components/button";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Keyboard, Navigation, Pagination, Virtual} from "swiper";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ArtifactCard} from "../components/artifacts-card";
import {IArtifacts} from "../interfaces/IArtifacts";

SwiperCore.use([Virtual, Navigation, Pagination]);

const Home: NextPage = () => {
    const artifacts: IArtifacts[] = [
      {
          id: 1,
          path: '',
          status: 'special',
          image: 'https://i.pinimg.com/564x/48/4b/2d/484b2df3212d3728ff8c3cc6a469d750.jpg',
          power: 95,
          type: '',
          title: 'teste'
      },
      {
          id: 2,
          path: '',
          status: 'rare',
          image: 'https://www.ufrgs.br/tesauros/_acervo/image/2019/12/img-0019471-4f1144751b.jpg',
          power: 95,
          type: '',
          title: 'teste'
      },
      {
          id: 3,
          path: '',
          status: 'legend',
          image: 'https://i0.wp.com/www.valinor.com.br/wp-content/uploads/2010/05/narya1.jpg?resize=281%2C307&ssl=1',
          power: 95,
          type: '',
          title: 'teste'
      }
  ]

  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Artifacts</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="w-full md:w-1/2 m-auto flex flex-col justify-center py-16 px-8">
          <h3 className="text-center bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug">Collection</h3>
          <p className="pt-6 text-center md:text-left">
              We aim to be the biggest wiki about all artifacts from Tolkien universe, but initially,
              we are gonna talk only about the rings of power. Its features, skills, bearers,
              story and introduce a timeline to tell more about its paths over the middle earth.
          </p>
          <div className="flex justify-center pt-8">
              <Button classes="w-full md:w-auto">Explore</Button>
          </div>
          <div className="flex justify-center mt-16">
              <Swiper
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                  }}
                  breakpoints={{
                      "640": {
                          slidesPerView: 1,
                      },
                      "768": {
                          slidesPerView: 1,
                      },
                      '1024': {
                          slidesPerView: 2,
                          spaceBetween: 10,
                      },
                      '1536': {
                          slidesPerView: 3,
                          spaceBetween: 10,
                      }
                  }}
                  modules={[Pagination, Keyboard, Autoplay]}
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
                          <SwiperSlide className="p-6" virtualIndex={index} key={artifact.id}>
                              <ArtifactCard title={artifact.title} power={artifact.power} type={artifact.type} status={artifact.status}>
                                <img alt={artifact.path} className="h-[320px] w-full rounded object-cover" src={artifact.image}/>
                              </ArtifactCard>
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
