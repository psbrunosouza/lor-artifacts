import Layout from '../../layout';
import Head from 'next/head';
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
        <section className="w-full md:2/3 lg:w-2/3 mt-8 flex items-center justify-center gap-8">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-amber-200 w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-[50%] mt-12 flex items-center justify-center">
              <span className="font-bold">
                <img
                  width="32px"
                  height="32px"
                  src={artifact.attributes.category.data.attributes.image}
                  alt=""
                />
              </span>
            </div>
            <span className="font-bold leading-6">Category</span>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="bg-amber-200 w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-[50%] flex items-center justify-center">
              <span className="font-bold">{artifact.attributes.power}</span>
            </div>
            <span className="font-bold leading-6">Power</span>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="bg-amber-200 w-[64px] h-[64px] md:w-[84px] md:h-[84px] rounded-[50%] mt-12 flex items-center justify-center">
              <span className="font-bold ">
                <img
                  width="32px"
                  height="32px"
                  src={artifact.attributes.category.data.attributes.image}
                  alt=""
                />
              </span>
            </div>
            <span className="font-bold leading-6">Type</span>
          </div>
        </section>

        <section className="w-full md:2/3 lg:w-2/3 mt-16 flex items-center justify-center gap-8">
          <ArrowLeft></ArrowLeft>
          <div className="w-[220px] h-[220px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px]">
            <img
              src={artifact.attributes.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <ArrowRight></ArrowRight>
        </section>

        <section className="w-5/6 md:w-[620px] min-h-[140px] my-16 flex items-center justify-center  flex-col p-4 gap-8 bg-lor-100 border-lor-600 border rounded-[12px] overflow-auto">
          <h1 className="text-[26px]">{artifact.attributes.title}</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias
            aliquam dicta dignissimos doloribus et facere inventore, libero
            nulla porro recusandae, rerum sunt...
          </p>
          <Button>See more</Button>
        </section>
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
