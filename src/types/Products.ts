import { FeaturedImage } from './Product';

export type Products = {
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage: FeaturedImage;
  handle: string;
  id: string;
  title: string;
}[];
