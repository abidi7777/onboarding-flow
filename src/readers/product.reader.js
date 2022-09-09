import _property from 'lodash-es/property';

export default {
  id: _property('id'),
  name: _property('name'),
  imageUrl: _property('image'),
  isSelected: _property('isSelected'),
};
