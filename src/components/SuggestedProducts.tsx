import ProductCard from './ProductCard';
import Container from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SuggestedProducts = ({ products }) => {
  return (
    <Container>
      <div className="pt-40 flex flex-col items-center justify-center gap-8">
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
            <div className="prev-btn flex justify-center items-center bg-black w-10 h-10 absolute top-[50%] left-4 translate-y-[-100%] z-10 cursor-pointer">
              <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.2 17l-8-8 8-8" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="next-btn flex justify-center items-center bg-black w-10 h-10 absolute top-[50%] right-4 translate-y-[-100%] z-10 cursor-pointer">
              <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.6 17l8-8-8-8" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default SuggestedProducts;
