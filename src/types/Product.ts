export type Product = {
  descriptionHtml: string;
  featuredImage: FeaturedImage;
  handle: string;
  id: string;
  images: {
    nodes: {
      url: string;
      altText: string | null;
      width: number;
      height: number;
    }[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  seo: {
    title: string;
    description: string;
  };
  title: string;
  variants: {
    edges: {
      node: {
        id: string;
      };
    }[];
  };
};

export type FeaturedImage = {
  url: string;
  altText: string | null;
  width: number;
  height: number;
};
