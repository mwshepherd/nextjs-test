import Head from 'next/head';
import shopify from '../../utils/shopify';
import { getProductQuery } from '../../requests/getProductQuery';

export const getServerSideProps = async (context) => {
  const { handle } = context.query;

  const variables = { handle };
  const data = await shopify(getProductQuery, variables);

  console.log('data', data);

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

const Product = ({ product }) => {
  console.log('product', product);
  return (
    <div>
      <Head>
        <title>{product.seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Product page</h2>
    </div>
  );
};

export default Product;
