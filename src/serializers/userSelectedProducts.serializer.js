import productsSerializer from './products.serializer';

export default function userSelectedProductsSerializer({ userId, products }) {
  return {
    userId,
    products: productsSerializer(products),
  };
}
