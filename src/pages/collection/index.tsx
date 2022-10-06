import api from '../../services/api';
import ReactPaginate from 'react-paginate';
import { Book, Grid } from 'react-feather';
import { IArtifacts } from '../../interfaces/IArtifacts';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Layout from '../../layout';
import Head from 'next/head';
import { SearchComponent } from '../../components/search';
import { ArtifactCard } from '../../components/artifacts-card';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import client from '../../lib/apollo';

interface ICollectionPageProps {
  artifacts: IArtifacts[];
}

const GET_ARTIFACTS_QUERY = gql`
  query Artifacts {
    artifacts(orderBy: power_DESC) {
      id
      title
      description
      image
      power
      slug
      artifactStatus {
        id
        title
        description
        image
        color
        slug
      }
      category {
        id
        title
        description
        image
        slug
      }
      place {
        id
        title
        description
        image
      }
    }
  }
`;

export default function Collection({ artifacts }: ICollectionPageProps) {
  const [searchValue, setSearchValue] = useState('');
  const [currentItems, setCurrentItems] = useState<IArtifacts[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(artifacts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(artifacts.length / itemsPerPage));
    filterArtifacts(searchValue);
  }, [itemOffset, itemsPerPage, searchValue]);

  const handleSearchValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue, searchValue, currentItems]
  );

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % artifacts.length;
    setItemOffset(newOffset);
  };

  const filterArtifacts = useCallback(
    (searchString: string) => {
      setCurrentItems(
        searchString !== ''
          ? artifacts.filter(
              (artifact) =>
                artifact.title
                  .toLowerCase()
                  .includes(searchString.toLowerCase()) ||
                String(artifact.power)
                  .toLowerCase()
                  .includes(searchString.toLowerCase()) ||
                artifact.category.title
                  .toLowerCase()
                  .includes(searchString.toLowerCase()) ||
                artifact.artifactStatus.description
                  .toLowerCase()
                  .includes(searchString.toLowerCase())
            )
          : artifacts
      );
    },
    [searchValue, setCurrentItems, currentItems]
  );

  return (
    <Layout>
      <Head>
        <meta
          property="og:title"
          content="Collection | Tolkien Universe - Artifacts"
        />
        <meta
          property="og:description"
          content="A list of artifacts from tolkien universe"
        />
        <meta property="og:image" content="/assets/images/tolkien-logo.svg" />
        <title>Tolkien Universe - Collection</title>
      </Head>

      <main className="flex justify-center items-center flex-col">
        <section className="px-16 w-full md:2/3 lg:w-2/3 h-auto p-6 lg:h-[64px] bg-lor-100 mt-28 border-lor-600 border rounded-b-[12px] lg:rounded-[12px] flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-[32px] mb-8 lg:mb-0">Artifacts</h1>
          <div className="flex gap-4 mt-8 lg:mt-0">
            <SearchComponent
              handleSearchValue={handleSearchValue}
              searchValue={searchValue}
            ></SearchComponent>
            <button
              type="button"
              className="h-[42px] hidden w-[42px] bg-lor-600 rounded-[12px] hover:bg-lor-600/80 transition ease-in-out delay-50 flex items-center justify-center "
            >
              <Grid></Grid>
            </button>
            <button
              type="button"
              className="h-[42px] hidden w-[42px] bg-lor-600 rounded-[12px] hover:bg-lor-600/80 transition ease-in-out delay-50 flex items-center justify-center"
            >
              <Book></Book>
            </button>
          </div>
        </section>

        <section className="px-16 w-full md:2/3 lg:w-2/3 mt-16  gap-16">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {currentItems.map((artifact) => (
              <div
                className="cursor-pointer justify-self-center"
                onClick={() => router.push(`/collection/${artifact.slug}`)}
                key={artifact.id}
              >
                <ArtifactCard
                  image={artifact.image}
                  title={artifact.title}
                  power={artifact.power}
                  type={artifact.category.image}
                  status={artifact.artifactStatus.color}
                ></ArtifactCard>
              </div>
            ))}
          </div>
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
  const { data: artifactsResponse } = await client.query({
    query: GET_ARTIFACTS_QUERY,
  });

  return {
    props: {
      artifacts: artifactsResponse.artifacts ? artifactsResponse.artifacts : [],
    },
  };
}
