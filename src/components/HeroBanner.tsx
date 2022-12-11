import Container from './Container';

const HeroBanner = () => {
  return (
    <div className="relative pt-[100%] md:pt-0 md:h-[calc(100vh-60px)] bg-black text-white">
      <Container>
        <div className="absolute md:relative top-0 w-full flex justify-center items-center h-full">
          <h1 className="text-[8vw] font-bold uppercase">Hero Banner</h1>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
