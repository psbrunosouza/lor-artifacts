import Layout from '../../layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Button } from '../../components/button';
import api from '../../services/api';
import { IArtifacts } from '../../interfaces/IArtifacts';
import { GetStaticPaths, GetStaticProps } from 'next';

interface IDetailsProps {
  artifact: IArtifacts;
}

export default function DetailId({ artifact }: IDetailsProps) {
  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Artifact Detail</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center flex-col">
        <section className="w-full md:2/3 lg:w-2/3 mt-24 flex items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center flex-col"
          >
            <div
              style={{
                borderColor:
                  artifact.attributes.artifact_status.data.attributes.color,
              }}
              className="border-2 w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-[50%] mt-12 flex items-center justify-center"
            >
              <span className="font-bold">
                <img
                  width="32px"
                  height="32px"
                  src={artifact.attributes.category.data.attributes.image}
                  alt=""
                />
              </span>
            </div>
            <span className="font-bold leading-6">
              {artifact.attributes.category.data.attributes.title}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center flex-col"
          >
            <div
              style={{
                backgroundColor:
                  artifact.attributes.artifact_status.data.attributes.color,
              }}
              className={`w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-[50%] flex items-center justify-center `}
            >
              <span className="font-bold">{artifact.attributes.power}</span>
            </div>
            <span className="font-bold leading-6">Power</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center flex-col"
          >
            <div
              style={{
                borderColor:
                  artifact.attributes.artifact_status.data.attributes.color,
              }}
              className="border-2 w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-[50%] mt-12 flex items-center justify-center"
            >
              <span className="font-bold ">
                <img
                  width="32px"
                  height="32px"
                  src="/assets/icons/type.svg"
                  alt=""
                />
              </span>
            </div>
            <span className="font-bold leading-6">
              {artifact.attributes.artifact_status.data.attributes.title}
            </span>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:2/3 lg:w-2/3 mt-8 flex items-center justify-center gap-8"
        >
          <div className="w-[280px] h-[380px] md:w-[520px] flex items-center justify-center border border-lor-600 rounded-[12px]">
            {artifact.attributes.image ? (
              <img
                src={artifact.attributes.image}
                alt=""
                className="w-full h-full object-cover rounded-[12px]"
              />
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img
                  alt="not-found"
                  className="h-[80px] w-[80px] rounded-[12px] object-cover"
                  src="/assets/icons/no-data-found.svg"
                />
                <span className="text-gray-400 leading-8">Image not found</span>
              </div>
            )}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: !artifact.attributes.title.length ? 'none' : 'flex',
          }}
          className="w-[280px] md:w-[520px] min-h-[140px] my-8 flex items-center justify-center flex-col p-4 gap-8 bg-lor-100 border-lor-600 border rounded-[12px] overflow-auto"
        >
          <h1 className="text-[26px]">{artifact.attributes.title}</h1>
          <p className="text-center">
            {artifact.attributes.description
              ? artifact.attributes.description
              : 'This artifact explanation is under construction, then go there and back again to see a new description...'}
          </p>
        </motion.section>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { data: artifacts } = await api(`/artifacts/${params.detailId}`, {
    params: {
      populate: '*',
    },
  });

  return {
    props: {
      artifact: artifacts.data,
    },
    revalidate: 60 * 60 * 12,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: artifacts } = await api('/artifacts', {
    params: {
      populate: '*',
    },
  });

  const paths = artifacts.data.map((artifact: IArtifacts) => ({
    params: { detailId: `${artifact.id}` },
  }));

  return { paths, fallback: false };
};
