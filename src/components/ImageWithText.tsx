import clsx from 'clsx';
import Image from 'next/image';
import Container from './Container';

const ImageWithText = ({ productImage, reverse }: { productImage: any; reverse?: boolean }) => {
  return (
    <div className="pt-10 md:pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className={clsx('relative w-full pt-[100%]', reverse && 'md:order-2')}>
            <Image
              className="object-cover object-top"
              src={productImage.url}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={productImage.altText || 'Shopify Product Image'}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-8 pl-8 pr-8 md:pr-16 text-sm">
            <h4 className="font-bold uppercase">Product Information</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id. Cras tincidunt lobortis feugiat
              vivamus. In hac habitasse platea dictumst.
            </p>
            <p>
              Nisi porta lorem mollis aliquam. Fermentum iaculis eu non diam. Quam pellentesque nec nam aliquam sem.
              Velit aliquet sagittis id consectetur. Gravida neque convallis a cras semper auctor neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Morbi non arcu risus quis varius quam quisque id. Cras tincidunt lobortis feugiat
              vivamus. In hac habitasse platea dictumst.
            </p>
            <p>
              Nisi porta lorem mollis aliquam. Fermentum iaculis eu non diam. Quam pellentesque nec nam aliquam sem.
              Velit aliquet sagittis id consectetur. Gravida neque convallis a cras semper auctor neque.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageWithText;
