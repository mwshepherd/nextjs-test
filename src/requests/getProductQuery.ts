import { gql } from 'graphql-request';

export const getProductQuery = gql`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      handle
      seo {
        title
        description
      }
      title
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
        altText
        width
        height
      }
      variants(first: 10) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;
