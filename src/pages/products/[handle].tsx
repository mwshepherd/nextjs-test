import Head from 'next/head';
import shopify from '../../utils/shopify';
import { getProductQuery } from '../../requests/getProductQuery';
import { Product } from '../../types/Product';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} loop pagination={{ clickable: true }}>
            {product.images.nodes.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full pt-[100%]">
                  <Image
                    className="object-cover object-top"
                    src={image.url}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={image.altText || 'Shopify Product Image'}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <div className="sticky top-0">
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
