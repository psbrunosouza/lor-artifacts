import Head from 'next/head';
import Layout from '../layout';
import { Button } from '../components/button';
import { ArtifactCard } from '../components/artifacts-card';
import { useState } from 'react';
import { PlaceCard } from '../components/place-card';
import { IArtifacts } from '../interfaces/IArtifacts';
import { IClassification } from '../interfaces/IClassification';
import { ICategories } from '../interfaces/ICategories';
import { IPlace } from '../interfaces/IPlace';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination, Virtual } from 'swiper';
import api from '../services/api';

interface IHomePageProps {
  categories: ICategories[];
  classifications: IClassification[];
  places: IPlace[];
  artifacts: IArtifacts[];
}

export default function Home({
  categories,
  classifications,
  places,
  artifacts,
}: IHomePageProps) {
  const [classificationDescription, setClassificationDescription] = useState(
    classifications[0].attributes.description
  );

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
              className="w-full"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
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
              modules={[Pagination, Navigation, Virtual, Keyboard, Autoplay]}
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              virtual={true}
            >
              {artifacts.map((artifact, index) => (
                <SwiperSlide
                  className="w-full p-6 flex justify-center items-center"
                  virtualIndex={index}
                  key={artifact.id}
                >
                  <ArtifactCard
                    title={artifact.attributes.title}
                    power={artifact.attributes.power}
                    type={artifact.attributes.category.data?.attributes.image}
                    status={
                      artifact.attributes.artifact_status.data?.attributes.title
                    }
                  >
                    <img
                      alt={artifact.attributes.path}
                      className="h-[320px] w-full rounded object-cover"
                      src={artifact.attributes.image}
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
          <div className="flex items-center mt-16 backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <h3 className="text-center  bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug">
                Classification
              </h3>

              <div className="pt-8 ">
                <Swiper
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
                  centeredSlides={false}
                  modules={[
                    Pagination,
                    Navigation,
                    Virtual,
                    Keyboard,
                    Autoplay,
                  ]}
                  keyboard={{
                    enabled: true,
                  }}
                  navigation={true}
                  virtual={true}
                >
                  {classifications.map((classification, index) => (
                    <SwiperSlide
                      className="w-full flex justify-center"
                      virtualIndex={index}
                      key={classification.id}
                    >
                      <div
                        onClick={() =>
                          setClassificationDescription(
                            classification.attributes.description
                          )
                        }
                        className="h-[160px] w-[160px] bg-white relative cursor-pointer"
                        style={{
                          backgroundColor: classification.attributes.color,
                          clipPath:
                            'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        }}
                      >
                        <div
                          className="bg-lor-100
                          flex flex-col
                          justify-center
                          items-center
                          absolute
                          left-[3px]
                          right-[3px]
                          bottom-[3px]
                          top-[3px]
                          flex"
                          style={{
                            clipPath:
                              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                          }}
                        >
                          <img
                            src={classification.attributes.image}
                            height="42px"
                            alt={classification.attributes.title}
                            width="42px"
                          />
                          <span className="font-bold">
                            {classification.attributes.title}
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
          <div className="flex items-center backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <h3 className="text-center  bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug">
                Places
              </h3>

              <p className="pt-8 text-center md:text-left">
                All items or will be classified by the place on it was made or
                the last location of it. All places go to have its history and
                characteristics described via some item.
              </p>

              <div className="pt-8 flex items-center justify-center gap-16">
                <div>
                  <PlaceCard title={places[0].attributes.title}>
                    <img
                      src={places[0].attributes.image}
                      alt={places[0].attributes.title}
                      className="object-cover rounded-[8px] w-full h-full"
                    />
                  </PlaceCard>
                </div>
                <div className="hidden md:flex ">
                  <PlaceCard title={places[1].attributes.title}>
                    <img
                      src={places[1].attributes.image}
                      alt={places[1].attributes.title}
                      className="object-cover rounded-[8px] w-full h-full"
                    />
                  </PlaceCard>
                </div>
                <div className="hidden lg:flex ">
                  <PlaceCard title={places[2].attributes.title}>
                    <img
                      src={places[2].attributes.image}
                      alt={places[2].attributes.title}
                      className="object-cover rounded-[8px] w-full h-full"
                    />
                  </PlaceCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-fixed"
          style={{ backgroundImage: 'url(/assets/images/mountains.jpg)' }}
        >
          <div className=" flex items-center backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <h3 className="text-center  bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug">
                Categories
              </h3>

              <p className="pt-8 text-center md:text-left">
                All items will be classified into categories, below you can see
                a set of icons around some categories used to classification of
                artifacts. Initially the most present category will be ring,
                because the main focus for now on the site is to present the
                rings of power. soon we plan fill this website with a lot of
                artifacts and more information about the items of the tolkien
                Universe.
              </p>

              <div className="pt-8 flex items-center justify-center flex-wrap gap-16">
                {categories.map((category) => (
                  <div
                    className="flex flex-col justify-center items-center "
                    key={category.id}
                  >
                    <img
                      src={category.attributes.image}
                      width="84px"
                      height="84px"
                      alt={category.attributes.title}
                    />
                    <span className="text-center">
                      {category.attributes.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: categories } = await api('/categories');
  const { data: classifications } = await api('/artifact-statuses');
  const { data: places } = await api('/places');
  const { data: artifacts } = await api('/artifacts', {
    params: {
      populate: '*',
    },
  });

  return {
    props: {
      categories: categories.data,
      classifications: classifications.data,
      places: places.data,
      artifacts: artifacts.data,
    },
  };
}
