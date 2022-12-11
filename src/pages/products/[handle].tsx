import Head from 'next/head';
import Image from 'next/image';
import shopify from '../../utils/shopify';
import Container from '../../components/Container';
import TextDivider from '../../components/TextDivider';
import ImageWithText from '../../components/ImageWithText';
import ProductInfo from '../../components/ProductInfo';
import { getProductQuery } from '../../requests/getProductQuery';
import { Product } from '../../types/Product';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChangeEvent, useState } from 'react';
import { GetServerSideProps } from 'next';
import { createCartMutation, updateCartMutation } from '../../requests/cartMutations';
import 'swiper/css';
import 'swiper/css/pagination';

export const getServerSideProps: GetServerSideProps = async (context) => {
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
  const [quantity, setQuantity] = useState(1);

  const getLines = () => [
    {
      quantity: quantity,
      merchandiseId: product.variants.edges[0].node.id,
    },
  ];

  const handleAddToCart = async () => {
    let cartId = sessionStorage.getItem('cartId');
    if (cartId) {
      const variables = {
        cartId,
        lines: getLines(),
      };
      const data = await shopify(updateCartMutation, variables);
    } else {
      const variables = {
        input: {
          lines: getLines(),
        },
      };
      // Attempted to crate a cart but endpoint currently not working
      // const data = await shopify(createCartMutation, variables);
      // cartId = data.cartCreate.cart.id;
      // sessionStorage.setItem('cartId', cartId);
    }
  };
  return (
    <>
      <Container>
        <Head>
          <title>{product.seo.title} | My Shopify Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          <div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              loop
              pagination={{ el: '.pagination-el', clickable: true }}
            >
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
              <div className="pagination-el flex justify-center py-4" />
            </Swiper>
          </div>
          <div className="px-4 md:px-0 md:pr-8">
            <div className="sticky top-14 pt-8">
              <h2 className="text-3xl uppercase font-bold">{product.title}</h2>
              <p className="text-2xl">${product.priceRange.minVariantPrice.amount}</p>
              <div className="grid grid-cols-2 gap-2 my-8">
                <input
                  type="number"
                  className="border p-2"
                  min="1"
                  value={quantity}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}
                />
                <button onClick={handleAddToCart} className="bg-gray-800 text-white p-2 w-full">
                  Add to cart
                </button>
              </div>

              <ProductInfo productDescription={product.descriptionHtml} />
            </div>
          </div>
        </div>
      </Container>
      <TextDivider />
      <ImageWithText productImage={product.featuredImage} />
      <ImageWithText productImage={product.featuredImage} reverse />
    </>
  );
};

export default ProductPage;
