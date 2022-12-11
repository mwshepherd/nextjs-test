import { gql } from 'graphql-request';

export const getProductsQuery = gql`
  query {
    products(first: 12) {
      nodes {
        id
        handle
        title
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          url
          width
          height
          altText
        }
      }
    }
  }
`;
