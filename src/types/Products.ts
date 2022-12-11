import { FeaturedImage } from './Product';

export type Products = {
  compareAtPriceRange: {
    maxVariantPrice: {
      amount: string;
    };
    minVariantPrice: {
      amount: string;
    };
  };
  featuredImage: FeaturedImage;
  handle: string;
  id: string;
  title: string;
}[];
