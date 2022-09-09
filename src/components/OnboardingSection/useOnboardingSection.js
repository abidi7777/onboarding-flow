import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import _cloneDeep from 'lodash-es/cloneDeep';

import saveUserSelectedProducts from '../../utils/saveUserSelectedProducts';
import useUser from '../../hooks/useUser';

export default function useOnboardingSection(products) {
  const [onboardingProducts, setOnboardingProducts] = useState(_cloneDeep(products));
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const updateOnboardingProductsSelectionState = useCallback(({ index }) => {
    const updatedOnboardingProducts = onboardingProducts.map((product) => {
      const currIndex = product.index;

      if (index === currIndex) {
        return { ...product, isSelected: !product.isSelected };
      }

      return { ...product };
    });

    if (updatedOnboardingProducts[index].isSelected) {
      const hasSelectedMaxProducts = selectedProductIds.length === 4;

      if (hasSelectedMaxProducts) {
        updatedOnboardingProducts[selectedProductIds[0]].isSelected = false;
      }

      setSelectedProductIds((prev) => [
        ...prev.slice(Number(hasSelectedMaxProducts)),
        index,
      ]);
    } else {
      setSelectedProductIds((prev) => prev.filter((currIndex) => currIndex !== index));
    }

    setOnboardingProducts(updatedOnboardingProducts);
  }, [selectedProductIds]);
  const { userId } = useUser();
  const removeAllProducts = () => {
    setSelectedProductIds([]);
    setOnboardingProducts(_cloneDeep(products));
  };
  const submitForm = useCallback(async () => {
    setIsSubmitting(true);

    await saveUserSelectedProducts({ products: selectedProducts, userId });

    toast('Successfully submitted');
    setIsSubmitting(false);
    removeAllProducts();
  }, [selectedProducts, userId]);

  useEffect(() => {
    setSelectedProducts(selectedProductIds.map((i) => onboardingProducts[i]));
  }, [selectedProductIds]);

  return {
    onboardingProducts,
    setOnboardingProducts,
    selectedProductIds,
    setSelectedProductIds,
    selectedProducts,
    updateOnboardingProductsSelectionState,
    removeAllProducts,
    submitForm,
    isSubmitting,
  };
}
