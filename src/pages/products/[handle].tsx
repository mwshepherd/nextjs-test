import Head from 'next/head';
import shopify from '../../utils/shopify';
import { getProductQuery } from '../../requests/getProductQuery';
import { Product } from '../../types/Product';
import Image from 'next/image';

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

const ProductPage = ({ product }: { product: Product }) => {
  console.log('product', product);
  return (
    <>
      <Head>
        <title>{product.seo.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative grid grid-cols-2">
        <div>
          <div className="relative w-full pt-[100%]">
            <Image
              className="object-cover object-top"
              src={product.featuredImage.url}
              fill
              alt={product.featuredImage.altText || 'Shopify Product Image'}
            />
          </div>
          <div className="flex">
            {product.images.nodes.map((image, i) => (
              <div key={i} className="relative w-full pt-[100%]">
                <Image
                  className="object-cover object-top"
                  src={image.url}
                  fill
                  alt={image.altText || 'Shopify Product Image'}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="sticky top-0 px-2">
            <h2 className="text-xl uppercase font-bold">{product.title}</h2>
            <p>${product.priceRange.minVariantPrice.amount}</p>
            <div className="grid grid-cols-2 gap-2 my-8">
              <input type="number" className="border p-2" min="1" />
              <button className="bg-green-400 text-white p-2 w-full">Add to cart</button>
            </div>

            <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
