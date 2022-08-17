import {NextPage} from "next";
import Layout from "../../layout";
import Head from "next/head";

export const Collection: NextPage = () =>  {
    return (
        <Layout>
            <Head>
                <title>Tolkien Universe - Collection</title>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>

            <main className="min-h-[420px]">
            </main>
        </Layout>
    )
}

export default Collection;