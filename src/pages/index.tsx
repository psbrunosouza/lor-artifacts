import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from "../layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Lord of the rings - Artifacts</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="min-h-[240px]">
      </main>
    </Layout>
  )
}

export default Home
