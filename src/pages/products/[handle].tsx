import Head from 'next/head';
import Image from 'next/image';
import shopify from '../../utils/shopify';
import Container from '../../components/Container';
import TextDivider from '../../components/TextDivider';
import ImageWithText from '../../components/ImageWithText';
import ProductInfo from '../../components/ProductInfo';
import SuggestedProducts from '../../components/SuggestedProducts';
import { getProductQuery } from '../../requests/getProductQuery';
import { Product } from '../../types/Product';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChangeEvent, useState } from 'react';
import { GetServerSideProps } from 'next';
import { createCartMutation, updateCartMutation } from '../../requests/cartMutations';
import { getProductsByTagQuery } from '../../requests/getProductsByTag';
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

  const tag = {
    tag: `tag:${data.product.tags[0]}`,
  };
  const productsByTag = await shopify(getProductsByTagQuery, tag);

  return {
    props: {
      product: data.product,
      productsByTag: productsByTag.products.nodes,
    },
  };
};

const ProductPage = ({ product, productsByTag }: { product: Product; productsByTag: any }) => {
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
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="px-4 md:px-0 md:pr-8 md:pl-20 pt-4 md:pt-16">
            <div className="sticky top-20">
              <h2 className="text-2xl uppercase font-bold mb-2">{product.title}</h2>
              <p className="text-lg font-light">${product.priceRange.minVariantPrice.amount}</p>
              <div className="flex flex-col items-start gap-4 pt-4 pb-8">
                <div className="flex gap-4 items-center">
                  <label className="font-bold">Qty</label>
                  <input
                    type="number"
                    className="border font-bold p-2 w-20 text-center focus:outline-none caret-transparent"
                    min="1"
                    value={quantity}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
                <button onClick={handleAddToCart} className="border border-black p-2 w-full uppercase">
                  Add to cart
                </button>
                <button onClick={handleAddToCart} className="bg-black text-white p-2 w-full uppercase">
                  Buy now
                </button>
              </div>

              <ProductInfo productDescription={product.descriptionHtml} />
            </div>
          </div>
        </div>
      </Container>
      {productsByTag.length > 0 && <SuggestedProducts products={productsByTag} />}
      <ImageWithText productImage={product.featuredImage} />
      <TextDivider />
      <ImageWithText productImage={product.featuredImage} reverse />
    </>
  );
};

export default ProductPage;
