import { IArtifacts } from '../../interfaces/IArtifacts';
import api from '../../services/api';
import ReactPaginate from 'react-paginate';
import { Book, Grid } from 'react-feather';
import Layout from '../../layout';
import Head from 'next/head';
import { SearchComponent } from '../../components/search';
import { ArtifactCard } from '../../components/artifacts-card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ICollectionPageProps {
  artifacts: IArtifacts[];
}

export default function Collection({ artifacts }: ICollectionPageProps) {
  const [currentItems, setCurrentItems] = useState<IArtifacts[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const router = useRouter();

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % artifacts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(artifacts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(artifacts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Collection</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center flex-col">
        <section className="px-16 w-full md:2/3 lg:w-2/3 h-auto p-6 lg:h-[64px] bg-lor-100 mt-28 border-lor-600 border rounded-[12px] flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-[32px] mb-8 lg:mb-0">Artifacts</h1>
          <div className="flex gap-4 mt-8 lg:mt-0">
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

        <section className=" px-16 w-full md:2/3 lg:w-2/3 mt-16 flex flex-col md:flex-row items-center gap-16">
          {currentItems.map((artifact) => (
            <div
              onClick={() => router.push(`/collection/${artifact.id}`)}
              key={artifact.id}
            >
              <ArtifactCard
                title={artifact.attributes.title}
                power={artifact.attributes.power}
                type={artifact.attributes.category.data.attributes.image}
                status={
                  artifact.attributes.artifact_status.data.attributes.title
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
        </section>

        <section className="px-16 w-full md:2/3 lg:w-2/3 my-16 flex justify-center items-center gap-16">
          <ReactPaginate
            containerClassName="react-paginate"
            pageClassName="page-item"
            nextClassName="next-item"
            previousClassName="previous-item"
            activeClassName="active-item"
            disabledClassName="disabled-item"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
          />
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
