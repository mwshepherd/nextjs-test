import Head from 'next/head';
import shopify from '../../utils/shopify';
import { getProductQuery } from '../../requests/getProductQuery';
import { Product } from '../../types/Product';

export const getServerSideProps = async (context) => {
  const { handle } = context.query;

  const variables = { handle };
  const data = await shopify(getProductQuery, variables);

  if (!data.product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data.product,
    },
  };
};

const Product = ({ product }: { product: Product }) => {
  console.log('product', product);
  return (
    <main>
      <Head>
        <title>{product.seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Product page</h2>
    </main>
  );
};

export default Product;
