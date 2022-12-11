import ProductCard from './ProductCard';
import Container from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Product } from '../types/Product';

const SuggestedProducts = ({ products }: { products: Product[] }) => {
  return (
    <Container>
      <div className="pt-10 md:pt-40 flex flex-col items-center justify-center gap-8">
        <div className="w-full border-t" />
        <h2 className="text-sm font-bold uppercase">You May Also Like</h2>
        <div className="w-full border-t" />
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            slidesPerView="auto"
            loop
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
            <div className="prev-btn hidden md:flex justify-center items-center bg-black w-10 h-10 absolute top-[50%] left-4 translate-y-[-100%] z-10 cursor-pointer">
              <ChevronLeftIcon className="w-4 text-white" />
            </div>
            <div className="next-btn hidden md:flex justify-center items-center bg-black w-10 h-10 absolute top-[50%] right-4 translate-y-[-100%] z-10 cursor-pointer">
              <ChevronRightIcon className="w-4 text-white" />
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default SuggestedProducts;
