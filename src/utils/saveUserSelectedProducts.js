import clientFetch from './clientFetch';
import userSelectedProductsSerializer from '../serializers/userSelectedProducts.serializer';

const path = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users`;

export default function saveUserSelectedProducts({ userId, products }) {
  const serializedData = userSelectedProductsSerializer({ userId, products });

  return clientFetch(`${path}/userId`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(serializedData),
  });
}
