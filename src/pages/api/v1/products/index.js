import products from '../../data/products.json';

export default async function handler(_, res) {
  res.status(200).json(products);
}
