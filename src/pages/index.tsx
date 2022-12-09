import Head from 'next/head';
import { gql } from 'graphql-request';
import shopify from '../utils/shopify';
import Image from 'next/image';
import Link from 'next/link';

const getProductsQuery = gql`
  query {
    products(first: 10) {
      nodes {
        id
        handle
        title
        compareAtPriceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        featuredImage {
          url
          width
          height
          altText
        }
        description
      }
    }
  }
`;

export const getStaticProps = async () => {
  const data = await shopify(getProductsQuery, {});

  return {
    props: { products: data.products.nodes },
  };
};

export default function Home({ products }) {
  console.log('products', products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-5 gap-4 px-20 text-center">
        {products &&
          products.map((product) => (
            <div key={product.id} className="bg-blue-300 p-4">
              <Link href={`/products/${product.handle}`}>
                <div className="relative pt-[100%]">
                  <Image
                    src={product.featuredImage.url}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    alt={product.featuredImage.alt || 'Shopify Product'}
                  />
                </div>
                <h2>{product.title}</h2>
                <p>${product.compareAtPriceRange.maxVariantPrice.amount}</p>
              </Link>
            </div>
          ))}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">footer</footer>
    </div>
  );
}
