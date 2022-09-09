export default function productsSerializer(products = []) {
  return products.map((product) => {
    const productCopy = { ...product };

    delete productCopy.isSelected;
    delete productCopy.index;

    return productCopy;
  });
}
