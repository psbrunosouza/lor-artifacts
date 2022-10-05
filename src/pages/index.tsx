import Head from 'next/head';
import Layout from '../layout';
import { Button } from '../components/button';
import { ArtifactCard } from '../components/artifacts-card';
import { useState } from 'react';
import { PlaceCard } from '../components/place-card';
import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/router';
import { IArtifacts } from '../interfaces/IArtifacts';
import { IStatus } from '../interfaces/IStatus';
import { ICategories } from '../interfaces/ICategories';
import { IPlace } from '../interfaces/IPlace';
import { motion } from 'framer-motion';
import client from '../lib/apollo';
import { gql } from '@apollo/client';

interface ILoadedProps {
  artifact: boolean;
  statuses: boolean;
}

interface ICurrentSlideProps {
  artifact: number;
  statuses: number;
}

interface IHomePageProps {
  categories: ICategories[];
  statuses: IStatus[];
  places: IPlace[];
  artifacts: IArtifacts[];
}

const GET_PLACES_QUERY = gql`
  query Places {
    places {
      id
      title
      description
      image
    }
  }
`;

const GET_CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      title
      description
      image
      slug
    }
  }
`;

const GET_STATUSES_QUERY = gql`
  query Statuses {
    artifactStatuses {
      id
      title
      description
      image
      color
      slug
    }
  }
`;

const GET_ARTIFACTS_QUERY = gql`
  query Artifacts {
    artifacts(orderBy: createdAt_DESC, first: 3) {
      title
      description
      image
      power
      slug
      artifactStatus {
        title
        description
        image
        color
        slug
      }
      category {
        title
        description
        image
        slug
      }
      place {
        title
        description
        image
      }
    }
  }
`;

export default function Home({
  categories,
  statuses,
  places,
  artifacts,
}: IHomePageProps) {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState<ICurrentSlideProps>({
    artifact: 0,
    statuses: 0,
  });
  const [loaded, setLoaded] = useState<ILoadedProps>({
    artifact: false,
    statuses: false,
  });

  const [classificationDescription, setClassificationDescription] = useState(
    statuses.length && statuses[0].description
  );

  async function handleGoToAnotherPage(param?: string): Promise<void> {
    await router.push(param ? `/collection/${param}` : '/collection');
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
            statuses: slider.track.details.rel,
          });
        },
        created() {
          setLoaded({ ...loaded, statuses: true });
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
      </Head>

      <main>
        <motion.section
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 m-auto flex flex-col justify-center py-16 px-8"
        >
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
            onClick={() => handleGoToAnotherPage()}
            className="flex justify-center pt-8"
          >
            <Button classes="w-full md:w-auto">Explore</Button>
          </div>

          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {artifacts.map((artifact) => (
                <div
                  onClick={() => handleGoToAnotherPage(String(artifact.slug))}
                  className="keen-slider__slide flex p-8 justify-center cursor-pointer"
                  key={artifact.id}
                >
                  <ArtifactCard
                    image={artifact.image}
                    title={artifact.title}
                    power={artifact.power}
                    type={artifact?.category.image}
                    status={artifact.artifactStatus.color}
                  ></ArtifactCard>
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
        </motion.section>

        <section
          className="bg-fixed"
          style={{ backgroundImage: 'url(/assets/images/mountains.jpg)' }}
        >
          <div className="flex items-center mt-16 backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center  bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug"
              >
                Classification
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-8 "
              >
                <div className="navigation-wrapper">
                  <div ref={sliderClassificationRef} className="keen-slider">
                    {statuses.map((status) => (
                      <div
                        key={status.id}
                        onClick={() =>
                          setClassificationDescription(status.description)
                        }
                        className="h-[160px] max-w-[160px] keen-slider__slide bg-white relative cursor-pointer"
                        style={{
                          backgroundColor: status.color,
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
                            src="/assets/icons/type.svg"
                            height="42px"
                            alt={status.title}
                            width="42px"
                          />
                          <span className="font-bold">{status.title}</span>
                        </div>
                      </div>
                    ))}
                    {loaded.statuses && instanceClassificationRef.current && (
                      <>
                        <Arrow
                          left
                          onClick={(e: any) =>
                            e.stopPropagation() ||
                            instanceClassificationRef.current?.prev()
                          }
                          disabled={currentSlide.statuses === 0}
                        />

                        <Arrow
                          onClick={(e: any) =>
                            e.stopPropagation() ||
                            instanceClassificationRef.current?.next()
                          }
                          disabled={
                            instanceClassificationRef.current.track.details &&
                            currentSlide.statuses ===
                              instanceClassificationRef.current.track.details
                                .slides.length -
                                1
                          }
                        />
                      </>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-8 text-center"
              >
                {classificationDescription}
              </motion.p>
            </div>
          </div>
        </section>

        <section className="bg-fixed">
          <div className="flex items-center backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center  bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug"
              >
                Places
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-8 text-center md:text-left"
              >
                All items or will be classified by the place on it was made or
                the last location of it. All places go to have its history and
                characteristics described via some item.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  display:
                    places[0] && places[1] && places[3] ? 'flex' : 'none',
                }}
                className="pt-8 flex items-center justify-center gap-16"
              >
                <div>
                  <PlaceCard title={places[0]?.title}>
                    <img
                      src={places[0]?.image}
                      alt={places[0]?.title}
                      className="object-cover rounded-[8px] w-full h-full"
                    />
                  </PlaceCard>
                </div>
                <div className="hidden md:flex ">
                  <PlaceCard title={places[1]?.title}>
                    <img
                      src={places[1]?.image}
                      alt={places[1]?.title}
                      className="object-cover rounded-[8px] w-full h-full"
                    />
                  </PlaceCard>
                </div>
                <div className="hidden lg:flex ">
                  <PlaceCard title={places[2]?.title}>
                    <img
                      src={places[2]?.image}
                      alt={places[2]?.title}
                      className="object-cover rounded-[8px] w-full h-full"
                    />
                  </PlaceCard>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          className="bg-fixed"
          style={{ backgroundImage: 'url(/assets/images/mountains.jpg)' }}
        >
          <div className=" flex items-center backdrop-brightness-50">
            <div className="w-full md:w-1/2  m-auto flex flex-col justify-center py-16 px-8">
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center  bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-snug"
              >
                Categories
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="pt-8 text-center md:text-left"
              >
                All items will be classified into categories, below you can see
                a set of icons around some categories used to classification of
                artifacts. Initially the most present category will be ring,
                because the main focus for now on the site is to present the
                rings of power. soon we plan fill this website with a lot of
                artifacts and more information about the items of the tolkien
                Universe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="pt-8 flex items-center justify-center flex-wrap gap-16"
              >
                {categories.map((category) => (
                  <div
                    className="flex flex-col justify-center items-center "
                    key={category.id}
                  >
                    <img
                      src={category.image}
                      width="84px"
                      height="84px"
                      alt={category.title}
                    />
                    <span className="text-center">{category.title}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
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

export async function getStaticProps() {
  const { data: placesResponse } = await client.query({
    query: GET_PLACES_QUERY,
  });
  const { data: artifactsResponse } = await client.query({
    query: GET_ARTIFACTS_QUERY,
  });
  const { data: statusesResponse } = await client.query({
    query: GET_STATUSES_QUERY,
  });
  const { data: categoriesResponse } = await client.query({
    query: GET_CATEGORIES_QUERY,
  });

  return {
    props: {
      places: placesResponse.places ? placesResponse.places : [],
      artifacts: artifactsResponse.artifacts ? artifactsResponse.artifacts : [],
      statuses: statusesResponse.artifactStatuses
        ? statusesResponse.artifactStatuses
        : [],
      categories: categoriesResponse.categories
        ? categoriesResponse.categories
        : [],
    },
  };
}
