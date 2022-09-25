import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import _noop from 'lodash-es/noop';

import PropertyControlledComponent from '../PropertyControlledComponent';

function TextBoxIcon({ icon: Icon }) {
  return <div className="absolute left-2 flex h-full items-center"><Icon /></div>;
}

export default function Textbox({
  value, className, placeholder, icon, onInput, onFocus, onBlur, onClearText,
}) {
  return (
    <div className="relative">
      {icon && <TextBoxIcon icon={icon} />}
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        className={cx(
          'w-full border p-2 pr-6 focus:bg-white focus:border-flickering-sea transition-colors duration-200 outline-none',
          { 'bg-white': value, 'bg-aircraft-white': !value },
          { 'pl-8': icon },
          className,
        )}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <PropertyControlledComponent shouldShow={!!value}>
        <button className="absolute right-0 top-0 flex h-full items-center pr-2 text-xs" type="button" onClick={onClearText}>
          ❌
        </button>
      </PropertyControlledComponent>
    </div>
  );
}

Textbox.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.func,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClearText: PropTypes.func,
};

Textbox.defaultProps = {
  value: '',
  className: '',
  placeholder: '',
  icon: null,
  onInput: _noop,
  onFocus: _noop,
  onBlur: _noop,
  onClearText: _noop,
};

TextBoxIcon.propTypes = {
  icon: PropTypes.func.isRequired,
};
