import Layout from '../../layout';
import Head from 'next/head';
import { ArrowLeft, ArrowRight } from 'react-feather';

interface IDetailsProps {}

export default function Details({}: IDetailsProps) {
  return (
    <Layout>
      <Head>
        <title>Tolkien Universe - Artifact Detail</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center flex-col">
        <section className="w-full md:2/3 lg:w-2/3 mt-24 flex items-center justify-center gap-8">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-amber-200 w-[64px] h-[64px] rounded-[50%] mt-12 flex items-center justify-center">
              <span className="font-bold">92</span>
            </div>
            <span className="font-bold leading-6">Category</span>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="bg-amber-200 w-[64px] h-[64px] rounded-[50%] flex items-center justify-center">
              <span className="font-bold">92</span>
            </div>
            <span className="font-bold leading-6">Power</span>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="bg-amber-200 w-[64px] h-[64px] rounded-[50%] mt-12 flex items-center justify-center">
              <span className="font-bold ">92</span>
            </div>
            <span className="font-bold leading-6">Type</span>
          </div>
        </section>

        <section className="w-full md:2/3 lg:w-2/3 mt-16 flex items-center justify-center gap-8">
          <ArrowLeft></ArrowLeft>
          <div className="w-[180px] h-[180px] ">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <ArrowRight></ArrowRight>
        </section>

        <section className="w-5/6 md:2/3 lg:w-2/3 min-h-[140px] my-16 flex items-center justify-center flex-col p-4 gap-8 bg-lor-100 border-lor-600 border rounded-[12px] overflow-auto">
          <h1 className="text-[26px]">title</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias
            aliquam dicta dignissimos doloribus et facere inventore, libero
            nulla porro recusandae, rerum sunt.
          </p>
        </section>
      </main>
    </Layout>
  );
}
