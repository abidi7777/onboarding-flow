import PropTypes from 'prop-types';

export default function PropertyControlledComponent({ children, shouldShow }) {
  return shouldShow ? children : null;
}

PropertyControlledComponent.propTypes = {
  children: PropTypes.node.isRequired,
  shouldShow: PropTypes.bool,
};

PropertyControlledComponent.defaultProps = {
  shouldShow: false,
};
