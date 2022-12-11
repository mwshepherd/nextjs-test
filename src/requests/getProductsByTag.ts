import { gql } from 'graphql-request';

export const getProductsByTagQuery = gql`
  query getProductByTag($tag: String!) {
    products(first: 5, query: $tag) {
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
