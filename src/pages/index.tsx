import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import shopify from '../utils/shopify';
import Container from '../components/Container';
import { getProductsQuery } from '../requests/getProductsQuery';
import { GetStaticProps } from 'next';
import { Products } from '../types/Products';
import ProductCard from '../components/ProductCard';

export const getStaticProps: GetStaticProps = async () => {
  const data = await shopify(getProductsQuery, {});

  return {
    props: { products: data.products.nodes },
  };
};

export default function Home({ products }: { products: Products }) {
  return (
    <>
      <Head>
        <title>My Shopify Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center px-8 2xl:px-0 py-10">
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </Container>
    </>
  );
}
