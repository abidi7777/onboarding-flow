export default function productsDeserializer(products = []) {
  return products.map((product, index) => ({ ...product, isSelected: false, index }));
}
