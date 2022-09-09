import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash-es/noop';

import PropertyControlledComponent from '../PropertyControlledComponent';
import productReader from '../../readers/product.reader';

function ProductDetail({ product }) {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          src={productReader.imageUrl(product)}
          alt={productReader.name(product)}
          width={16}
          height={16}
        />
      </div>
      <div className="w-[90%] truncate">{productReader.name(product)}</div>
      <PropertyControlledComponent shouldShow={productReader.isSelected(product)}>
        <div className="text-xs">✓</div>
      </PropertyControlledComponent>
    </div>
  );
}

export default function ProductSearchResults({ products, onProductClick }) {
  const keyDownHandler = (data, ev) => {
    if (ev.key === 'Enter') { onProductClick(data); }
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={productReader.id(product)} className="rounded-md hover:bg-gray-200">
          <div
            className="p-2"
            role="button"
            tabIndex={0}
            onClick={() => onProductClick(product)}
            onKeyDown={keyDownHandler.bind(null, product)}
          >
            <ProductDetail product={product} />
          </div>
        </li>
      ))}
    </ul>
  );
}

ProductSearchResults.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  onProductClick: PropTypes.func,
};

ProductSearchResults.defaultProps = {
  onProductClick: _noop,
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
