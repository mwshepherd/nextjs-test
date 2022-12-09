import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import shopify from '../utils/shopify';
import { getProductsQuery } from '../requests/getProductsQuery';

export const getStaticProps = async () => {
  const data = await shopify(getProductsQuery, {});

  return {
    props: { products: data.products.nodes },
  };
};

export default function Home({ products }) {
  console.log('products', products);
  return (
    <>
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
    </>
  );
}
