import clientFetch from './clientFetch';
import getBaseURL from './getBaseURL';
import userSelectedProductsSerializer from '../serializers/userSelectedProducts.serializer';

const path = `${getBaseURL()}/api/v1/users`;

export default function saveUserSelectedProducts({ userId, products }) {
  const serializedData = userSelectedProductsSerializer({ userId, products });

  return clientFetch(`${path}/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(serializedData),
  });
}
