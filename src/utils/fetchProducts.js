import clientFetch from './clientFetch';
import productsDeserializer from '../deserializers/products.deserializer';

const path = 'http://localhost:3000/api/v1/products';

export default async function fetchProducts() {
  const products = await clientFetch(path);

  return productsDeserializer(products);
}
