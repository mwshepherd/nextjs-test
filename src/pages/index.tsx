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
  return (
    <>
      <Head>
        <title>My Shopify Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-10">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <Link href={`/products/${product.handle}`}>
                <div className="relative pt-[100%] overflow-hidden">
                  <Image
                    src={product.featuredImage.url}
                    fill
                    className="object-cover object-top hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={product.featuredImage.alt || 'Shopify Product'}
                  />
                </div>
                <div className="flex flex-col justify-center py-4">
                  <h2 className="text-sm font-bold uppercase">{product.title}</h2>
                  <p>${product.compareAtPriceRange.maxVariantPrice.amount}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
