import Container from './Container';

const TextDivider = () => {
  return (
    <div className="pt-10 md:pt-20 flex justify-center items-center">
      <div className="w-full bg-gray-800 py-12 px-8">
        <Container>
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default TextDivider;
