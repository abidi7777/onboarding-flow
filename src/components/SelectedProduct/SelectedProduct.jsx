import { AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash-es/noop';

import productReader from '../../readers/product.reader';

function ProductPlaceholder() {
  return (
    <div className="border bg-gray-100 p-4">
      <AiOutlinePlus />
    </div>
  );
}

function ProductDetail({ product, onRemove }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <img
          src={productReader.imageUrl(product)}
          width={50}
          height={50}
          alt={productReader.name(product)}
        />
      </div>
      <div className="mb-8">{productReader.name(product)}</div>
      <button
        type="button"
        className="text-xs font-bold text-gray-400 transition-colors duration-200 hover:text-red-500"
        onClick={() => onRemove(product)}
      >
        <span>❌</span>
        <span className="ml-2">Remove</span>
      </button>
    </div>
  );
}

export default function SelectedProduct({ product, onRemove }) {
  return (
    <div className="flex h-48 w-48 items-center justify-center border shadow-md">
      {product ? <ProductDetail product={product} onRemove={onRemove} /> : <ProductPlaceholder />}
    </div>

  );
}

SelectedProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  onRemove: PropTypes.func,
};

SelectedProduct.defaultProps = {
  product: null,
  onRemove: _noop,
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func,
};

ProductDetail.defaultProps = {
  onRemove: _noop,
};
