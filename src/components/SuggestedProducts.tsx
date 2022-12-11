import ProductCard from './ProductCard';
import Container from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SuggestedProducts = ({ products }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Container>
      <div className="pt-20 flex flex-col items-center justify-center gap-8">
        <h2 className="text-xl uppercase">You May Also Like</h2>
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
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
            <div
              ref={navigationPrevRef}
              className="flex justify-center items-center bg-gray-800 w-10 h-10 absolute top-[50%] left-2 translate-y-[-100%] z-10 cursor-pointer opacity-50"
            >
              <svg width={10} height={18} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.2 17l-8-8 8-8" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div
              ref={navigationNextRef}
              className="flex justify-center items-center bg-gray-800 w-10 h-10 absolute top-[50%] right-2 translate-y-[-100%] z-10 cursor-pointer opacity-50"
            >
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
