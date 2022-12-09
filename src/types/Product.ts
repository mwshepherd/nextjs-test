export type Product = {
  descriptionHtml: string;
  featuredImage: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  };
  handle: string;
  id: string;
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
