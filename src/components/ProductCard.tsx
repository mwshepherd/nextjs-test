import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/Product';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.handle}`}>
      <div className="relative pt-[100%] overflow-hidden">
        <Image
          src={product.featuredImage.url}
          fill
          className="object-cover object-top hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.featuredImage.altText || 'Shopify Product'}
          priority
        />
      </div>
      <div className="flex flex-col justify-center py-4 text-center">
        <h2 className="text-sm font-bold uppercase">{product.title}</h2>
        <p>${product.priceRange?.minVariantPrice.amount}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
