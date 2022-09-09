import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash-es/noop';

import SelectedProduct from '../SelectedProduct/SelectedProduct';

export default function SelectedProductGroup({ number, products, onRemove }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-5 md:grid-cols-2 md:grid-rows-2">
      {
        Array(number)
          .fill(-1)
          .map((_, idx) => (
            <SelectedProduct
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              product={products[idx]}
              onRemove={onRemove}
            />
          ))
      }
    </div>
  );
}

SelectedProductGroup.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  number: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
};

SelectedProductGroup.defaultProps = {
  onRemove: _noop,
};
