import { CgSpinner } from 'react-icons/cg';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import _noop from 'lodash-es/noop';

import PropertyControlledComponent from '../PropertyControlledComponent';

export default function Button({
  children, className, isDisabled, isLoading, onClick,
}) {
  return (
    <button
      type="button"
      className={cx(
        {
          'bg-babbling-creek cursor-not-allowed': isDisabled,
          'bg-flickering-sea': !isDisabled,
          'opacity-70 cursor-progress': isLoading,
          'hover:bg-thick-blue': !isLoading && !isDisabled,
        },
        'flex items-center justify-center gap-2 w-full p-2 text-white rounded-sm transition-colors duration-200',
        className,
      )}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      <PropertyControlledComponent shouldShow={isLoading}>
        <CgSpinner size={18} className="animate-spin" />
      </PropertyControlledComponent>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  isDisabled: false,
  isLoading: false,
  onClick: _noop,
};
