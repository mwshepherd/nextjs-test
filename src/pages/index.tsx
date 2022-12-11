import Head from 'next/head';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import shopify from '../utils/shopify';
import Container from '../components/Container';
import { getProductsQuery } from '../requests/getProductsQuery';
import { GetStaticProps } from 'next';
import { Products } from '../types/Products';
import { Product } from '../types/Product';

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
      <HeroBanner />
      <Container>
        <div className="px-8 2xl:px-0 py-10">
          <h2 className="text-2xl text-center uppercase font-bold pb-8">Our Collection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {products && products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </Container>
    </>
  );
}
