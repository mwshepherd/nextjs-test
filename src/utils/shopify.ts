import { GraphQLClient } from 'graphql-request';

const shopify = async (query, variables) => {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
    },
  });

  return await graphQLClient.request(query, variables);
};
export default shopify;
