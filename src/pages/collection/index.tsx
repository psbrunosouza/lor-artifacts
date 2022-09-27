import { NextPage } from 'next';
import Layout from '../../layout';
import Head from 'next/head';
import { SearchComponent } from '../../components/search';
import { Book, Grid } from 'react-feather';
import api from '../../services/api';
import { ICategories } from '../../interfaces/ICategories';
import { IClassification } from '../../interfaces/IClassification';
import { IPlace } from '../../interfaces/IPlace';
import { IArtifacts } from '../../interfaces/IArtifacts';
import { ArtifactCard } from '../../components/artifacts-card';

interface ICollectionPageProps {
  artifacts: IArtifacts[];
}

export default function Collection({ artifacts }: ICollectionPageProps) {
  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Collection</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center flex-col">
        <section className=" px-16 w-full md:w-1/2 h-[64px] bg-lor-100 mt-28 border-lor-600 border rounded-[12px] flex items-center justify-between">
          <h1 className="text-[32px]">Artifacts</h1>
          <div className="flex gap-4">
            <SearchComponent></SearchComponent>
            <button
              type="button"
              className="h-[42px] w-[42px] bg-lor-600 rounded-[12px] hover:bg-lor-600/80 transition ease-in-out delay-50 flex items-center justify-center "
            >
              <Grid></Grid>
            </button>
            <button
              type="button"
              className="h-[42px] w-[42px] bg-lor-600 rounded-[12px] hover:bg-lor-600/80 transition ease-in-out delay-50 flex items-center justify-center"
            >
              <Book></Book>
            </button>
          </div>
        </section>

        <section className=" px-16 w-full md:w-1/2  mt-4  flex items-center gap-16">
          {artifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.id}
              title={artifact.attributes.title}
              power={artifact.attributes.power}
              type={artifact.attributes.category.data.attributes.image}
              status={artifact.attributes.artifact_status.data.attributes.title}
            >
              <img
                alt={artifact.attributes.path}
                className="h-[320px] w-full rounded object-cover"
                src={artifact.attributes.image}
              />
            </ArtifactCard>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: artifacts } = await api('/artifacts', {
    params: {
      populate: '*',
    },
  });

  return {
    props: {
      artifacts: artifacts.data,
    },
  };
}
