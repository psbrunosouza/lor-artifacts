import Head from 'next/head';
import Layout from '../layout';
import { Button } from '../components/button';
import { ArtifactCard } from '../components/artifacts-card';
import { useState } from 'react';
import { PlaceCard } from '../components/place-card';
import { useKeenSlider } from 'keen-slider/react';
import { IArtifacts } from '../interfaces/IArtifacts';
import { IClassification } from '../interfaces/IClassification';
import { ICategories } from '../interfaces/ICategories';
import { IPlace } from '../interfaces/IPlace';
import { SwiperSlide } from 'swiper/react';
import api from '../services/api';
import { useRouter } from 'next/router';

interface ILoadedProps {
  artifact: boolean;
  classification: boolean;
}

interface ICurrentSlideProps {
  artifact: number;
  classification: number;
}

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
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState<ICurrentSlideProps>({
    artifact: 0,
    classification: 0,
  });
  const [loaded, setLoaded] = useState<ILoadedProps>({
    artifact: false,
    classification: false,
  });

  const [classificationDescription, setClassificationDescription] = useState(
    classifications[0].attributes.description
  );

  async function handleGoToAnotherPage(): Promise<void> {
    await router.push('/collection');
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged(slider) {
        setCurrentSlide({
          ...currentSlide,
          artifact: slider.track.details.rel,
        });
      },
      created() {
        setLoaded({ ...loaded, artifact: true });
      },
      initial: 0,
      breakpoints: {
        '(min-width: 640px)': {
          loop: false,
          slides: {
            perView: 1,
            spacing: 15,
          },
        },

        '(min-width: 768px)': {
          loop: false,
          slides: {
            perView: 1,
            spacing: 15,
          },
        },

        '(min-width: 1024px)': {
          loop: false,
          slides: {
            perView: 2,
            spacing: 15,
          },
        },

        '(min-width: 1536px)': {
          loop: false,
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
    },
    []
  );

  const [sliderClassificationRef, instanceClassificationRef] =
    useKeenSlider<HTMLDivElement>(
      {
        slideChanged(slider) {
          setCurrentSlide({
            ...currentSlide,
            classification: slider.track.details.rel,
          });
        },
        created() {
          setLoaded({ ...loaded, classification: true });
        },
        initial: 0,
        breakpoints: {
          '(min-width: 640px)': {
            loop: false,
            slides: {
              perView: 1,
              spacing: 15,
            },
          },

          '(min-width: 768px)': {
            loop: false,
            slides: {
              perView: 1,
              spacing: 15,
            },
          },

          '(min-width: 1024px)': {
            loop: false,
            slides: {
              perView: 2,
              spacing: 15,
            },
          },

          '(min-width: 1536px)': {
            loop: false,
            slides: {
              perView: 3,
              spacing: 15,
            },
          },
        },
      },
      []
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
          <div
            onClick={handleGoToAnotherPage}
            className="flex  justify-center pt-8"
          >
            <Button classes="w-full md:w-auto">Explore</Button>
          </div>

          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {artifacts.map((artifact) => (
                <div
                  className="keen-slider__slide flex p-8 justify-center"
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
                      className="h-full w-full rounded object-cover"
                      src={artifact.attributes.image}
                    />
                  </ArtifactCard>
                </div>
              ))}
              {loaded.artifact && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide.artifact === 0}
                  />

                  <Arrow
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide.artifact ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
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
                <div className="navigation-wrapper">
                  <div ref={sliderClassificationRef} className="keen-slider">
                    {classifications.map((classification) => (
                      <div
                        key={classification.id}
                        onClick={() =>
                          setClassificationDescription(
                            classification.attributes.description
                          )
                        }
                        className="h-[160px] max-w-[160px] keen-slider__slide bg-white relative cursor-pointer"
                        style={{
                          backgroundColor: classification.attributes.color,
                          clipPath:
                            'polygon(33% 0%, 68% 0%, 85% 50%, 68% 100%, 33% 100%, 15% 50%)',
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
                              'polygon(33% 0%, 68% 0%, 85% 50%, 68% 100%, 33% 100%, 15% 50%)',
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
                    ))}
                    {loaded.classification &&
                      instanceClassificationRef.current && (
                        <>
                          <Arrow
                            left
                            onClick={(e: any) =>
                              e.stopPropagation() ||
                              instanceClassificationRef.current?.prev()
                            }
                            disabled={currentSlide.classification === 0}
                          />

                          <Arrow
                            onClick={(e: any) =>
                              e.stopPropagation() ||
                              instanceClassificationRef.current?.next()
                            }
                            disabled={
                              currentSlide.classification ===
                              instanceClassificationRef.current.track.details
                                .slides.length -
                                1
                            }
                          />
                        </>
                      )}
                  </div>
                </div>
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
  const { data: classifications } = await api('/artifact-statuses', {
    params: {
      populate: '*',
    },
  });
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

function Arrow(props: any) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
