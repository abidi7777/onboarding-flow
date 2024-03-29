import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash-es/noop';

import ProductSearchResults from '../ProductSearchResults';
import PropertyControlledComponent from '../PropertyControlledComponent';
import TextBox from '../TextBox';
import useProductSearchForm from './useProductSearchForm';

export default function SearchForm({ products, onProductClick }) {
  const {
    searchText,
    setSearchText,
    setShowSearchResults,
    showSearchResults,
    filteredProducts,
    ref,
  } = useProductSearchForm({ products });

  return (
    <form>
      <div className="relative mb-8" ref={ref}>
        <TextBox
          icon={BsSearch}
          placeholder="Search for any Software..."
          value={searchText}
          onInput={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSearchResults(searchText.length > 1)}
          onClearText={() => setSearchText('')}
        />
        <PropertyControlledComponent shouldShow={showSearchResults}>
          <div className="absolute top-12 max-h-56 w-full overflow-auto rounded-sm border bg-white p-2 shadow-lg">
            <PropertyControlledComponent shouldShow={!!filteredProducts.length}>
              <ProductSearchResults products={filteredProducts} onProductClick={onProductClick} />
            </PropertyControlledComponent>
            <PropertyControlledComponent shouldShow={!filteredProducts.length}>
              <div className="text-center text-gray-400">
                No Products found for the given keyword
              </div>
            </PropertyControlledComponent>
          </div>
        </PropertyControlledComponent>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onProductClick: PropTypes.func,
};

SearchForm.defaultProps = {
  onProductClick: _noop,
};
