import Head from "next/head";
import Layout, { defaults } from "../components/layout";
import Card from "../components/card";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <meta name="og:title" content={`${defaults.title}`} />
        <title>{`${defaults.title}`}</title>
      </Head>
      <Card />
    </Layout>
  );
}
