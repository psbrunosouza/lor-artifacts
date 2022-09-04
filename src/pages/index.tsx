import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../layout'
import { Button } from '../components/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Virtual,
} from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ArtifactCard } from '../components/artifacts-card'
import { IArtifacts } from '../interfaces/IArtifacts'
import { IClassification } from '../interfaces/IClassification'
import { useState } from 'react'
import { PlaceCard } from '../components/place-card'
import { ICategories } from '../interfaces/ICategories'

SwiperCore.use([Virtual, Navigation, Pagination])

const Home: NextPage = () => {
  const artifacts: IArtifacts[] = [
    {
      id: 1,
      path: '',
      status: 'special',
      image:
        'https://i.pinimg.com/564x/48/4b/2d/484b2df3212d3728ff8c3cc6a469d750.jpg',
      power: 95,
      type: '/assets/icons/ring.svg',
      title: 'teste',
    },
    {
      id: 2,
      path: '',
      status: 'rare',
      image:
        'https://www.ufrgs.br/tesauros/_acervo/image/2019/12/img-0019471-4f1144751b.jpg',
      power: 95,
      type: '/assets/icons/ring.svg',
      title: 'teste',
    },
    {
      id: 3,
      path: '',
      status: 'legend',
      image:
        'https://i0.wp.com/www.valinor.com.br/wp-content/uploads/2010/05/narya1.jpg?resize=281%2C307&ssl=1',
      power: 95,
      type: '/assets/icons/ring.svg',
      title: 'teste',
    },
  ]

  const classifications: IClassification[] = [
    {
      id: 1,
      title: 'rare',
      image: '/assets/icons/ring.svg',
      description:
        'We aim to be the biggest wiki about all artifacts from Tolkien universe, but initially, we are gonna talk only about the rings of power. Its features, skills, bearers, story and introduce a timeline to tell more about its paths over the middle earth.',
      color: '#31E991',
    },
    {
      id: 2,
      title: 'special',
      image: '/assets/icons/ring.svg',
      description:
        'skills, bearers, story and introduce a timeline to tell more about its paths over the middle earth.',
      color: '#E931E1',
    },
    {
      id: 3,
      image: '/assets/icons/ring.svg',
      title: 'legend',
      description:
        'but initially, we are gonna talk only about the rings of power. Its features, skills, bearers, story and introduce a timeline to tell more about its paths over the middle earth.',
      color: '#E9B531',
    },
  ]

  const categories: ICategories[] = [
    {
      id: 1,
      title: 'sword',
      image: '/asset/icons/sword.svg',
    },
    {
      id: 2,
      title: 'sword',
      image: '/asset/icons/sword.svg',
    },
  ]

  const [classificationDescription, setClassificationDescription] = useState(
    classifications[0].description
  )

  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Artifacts</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main>
        <section className="w-full md:w-1/2 m-auto flex flex-col justify-center py-16 px-8">
          <h3 className="text-center bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug">
            Collection
          </h3>
          <p className="pt-6 text-center md:text-left">
            We aim to be the biggest wiki about all artifacts from Tolkien
            universe, but initially, we are gonna talk only about the rings of
            power. Its features, skills, bearers, story and introduce a timeline
            to tell more about its paths over the middle earth.
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
                '640': {
                  slidesPerView: 1,
                },
                '768': {
                  slidesPerView: 1,
                },
                '1024': {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                '1536': {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
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
              {artifacts.map((artifact, index) => (
                <SwiperSlide
                  className=" p-6 flex justify-center items-center"
                  virtualIndex={index}
                  key={artifact.id}
                >
                  <ArtifactCard
                    title={artifact.title}
                    power={artifact.power}
                    type={artifact.type}
                    status={artifact.status}
                  >
                    <img
                      alt={artifact.path}
                      className="h-[320px] w-full rounded object-cover"
                      src={artifact.image}
                    />
                  </ArtifactCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section
          className="bg-fixed"
          style={{ backgroundImage: 'url(/assets/images/mountains.jpg)' }}
        >
          <div className="min-h-[620px] flex items-center mt-16 backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <h3 className="text-center  bg-clip-text bg-gradient-to-l text-transparent text-white leading-snug">
                Classification
              </h3>

              <div className="pt-8 flex items-center justify-center gap-16">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    '640': {
                      slidesPerView: 1,
                    },
                    '768': {
                      slidesPerView: 1,
                    },
                    '1024': {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    '1536': {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
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
                  {classifications.map((classification, index) => (
                    <SwiperSlide
                      className="flex justify-center items-center"
                      virtualIndex={index}
                      key={classification.id}
                    >
                      <div
                        onClick={() =>
                          setClassificationDescription(
                            classification.description
                          )
                        }
                        className="h-[160px] w-[160px] bg-white relative cursor-pointer"
                        style={{
                          backgroundColor: classification.color,
                          clipPath:
                            'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        }}
                      >
                        <div
                          className="bg-lor-100
                          flex flex-col
                          justify-center
                          items-center
                          gap-2
                          absolute
                          left-[3px]
                          right-[3px]
                          bottom-[3px]
                          top-[3px]
                          flex
                          justify-center
                          items-center"
                          style={{
                            clipPath:
                              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                          }}
                        >
                          <img
                            src={classification.image}
                            height="42px"
                            alt={classification.title}
                            width="42px"
                          ></img>
                          <span className="font-bold">
                            {classification.title}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p className="pt-8 text-center md:text-left">
                {classificationDescription}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-fixed">
          <div className="min-h-[620px] flex items-center backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <h3 className="text-center  bg-clip-text bg-gradient-to-l text-transparent text-white leading-snug">
                Places
              </h3>

              <p className="pt-8 text-center md:text-left">
                {classificationDescription}
              </p>

              <div className="pt-8 flex items-center justify-center gap-16">
                <div className="w-[320px]">
                  <PlaceCard title=""></PlaceCard>
                </div>
                <div className="hidden md:flex w-[320px]">
                  <PlaceCard title=""></PlaceCard>
                </div>
                <div className="hidden lg:flex w-[320px]">
                  <PlaceCard title=""></PlaceCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-fixed"
          style={{ backgroundImage: 'url(/assets/images/mountains.jpg)' }}
        >
          <div className="min-h-[620px] flex items-center backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <h3 className="text-center  bg-clip-text bg-gradient-to-l text-transparent text-white leading-snug">
                Categories
              </h3>

              <p className="pt-8 text-center md:text-left">
                {classificationDescription}
              </p>

              <div className="pt-8 flex items-center justify-center gap-16"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
