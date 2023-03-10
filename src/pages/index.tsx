import { getProducts } from '@/services/products';
import { Home, Product } from '@/templates/Home';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Head from 'next/head';

export default function Index() {
  const { data } = useQuery<Product[]>(['products'], getProducts);

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="Desafio Front-End da MKS Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home products={data} />
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products'], getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
