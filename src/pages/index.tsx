import Head from 'next/head';
import Layout from '@/components/layout';
import Header from '@/components/header';
import Hero from '@/components/hero';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
