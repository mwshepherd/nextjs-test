import { gql } from 'graphql-request';

export const getProductsQuery = gql`
  query {
    products(first: 10) {
      nodes {
        id
        handle
        title
        compareAtPriceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        featuredImage {
          url
          width
          height
          altText
        }
        description
      }
    }
  }
`;
