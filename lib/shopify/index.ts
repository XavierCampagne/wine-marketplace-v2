import { Shopify } from '@shopify/shopify-api';

const shopifyConfig = {
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecret: process.env.SHOPIFY_API_SECRET,
  scopes: ['read_products'],
  hostName: process.env.SHOPIFY_STORE_DOMAIN?.replace('https://', ''),
};

export const shopifyClient = Shopify.Clients.Rest(shopifyConfig);