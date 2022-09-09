import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import Button from '../Button';
import ProductSearchForm from '../ProductSearchForm';
import SelectedProductGroup from '../SelectedProductGroup/SelectedProductGroup';
import useOnboardingSection from './useOnboardingSection';

export default function OnboardingSection({ products }) {
  const {
    onboardingProducts,
    selectedProducts,
    updateOnboardingProductsSelectionState,
    removeAllProducts,
    submitForm,
    isSubmitting,
  } = useOnboardingSection(products);

  return (
    <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
      <div>
        <div className="mb-8">
          <SelectedProductGroup
            number={4}
            products={selectedProducts}
            onRemove={updateOnboardingProductsSelectionState}
          />
        </div>
        <div className="text-center text-sm text-gray-400">
          {selectedProducts.length}
          {' '}
          Product
          {selectedProducts.length === 0 || selectedProducts.length > 1 ? 's' : ''}
          {' '}
          added
        </div>
        <div className="text-center">
          <button
            type="button"
            className={cx(
              'text-xs font-bold text-gray-400 transition-colors duration-200 hover:text-red-500',
              { visible: selectedProducts.length > 0, invisible: selectedProducts.length === 0 },
            )}
            onClick={removeAllProducts}
          >
            <span>❌</span>
            <span className="ml-2">Remove All</span>
          </button>
        </div>
      </div>
      <div>
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-bold lg:text-3xl">Let&apos;s add your internal tools</h3>
          <p className="text-justify">Search to quickly add products your team uses today.</p>
          <p className="text-justify">You&apos;ll be able to add as many as you need later but for now lets add four.</p>
        </div>
        <div>
          <ProductSearchForm
            products={onboardingProducts}
            onProductClick={updateOnboardingProductsSelectionState}
          />
        </div>
        <div>
          <Button
            isDisabled={selectedProducts.length === 0}
            isLoading={isSubmitting}
            onClick={submitForm}
          >
            Next
          </Button>
        </div>
      </div>
      <div />
      <Toaster />
    </div>
  );
}

OnboardingSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};
