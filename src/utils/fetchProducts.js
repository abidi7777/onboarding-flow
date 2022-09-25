import clientFetch from './clientFetch';
import getBaseURL from './getBaseURL';
import productsDeserializer from '../deserializers/products.deserializer';

const path = `${getBaseURL()}/api/v1/products`;

export default async function fetchProducts() {
  const products = await clientFetch(path);

  return productsDeserializer(products);
}
