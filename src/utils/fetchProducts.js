import clientFetch from './clientFetch';
import productsDeserializer from '../deserializers/products.deserializer';

const path = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`;

export default async function fetchProducts() {
  const products = await clientFetch(path);

  return productsDeserializer(products);
}
