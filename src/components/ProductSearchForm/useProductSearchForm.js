import { useEffect, useState } from 'react';

import useOutsideClickListener from '../../hooks/useOutsideClickListener';

export default function useProductSearchForm({ products }) {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { ref } = useOutsideClickListener(() => setShowSearchResults(false));

  useEffect(() => {
    if (searchText.length < 2) {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((product) => product.name.match(new RegExp(searchText, 'gi'))),
      );
    }
  }, [products, searchText]);

  useEffect(() => {
    setShowSearchResults(searchText.length > 1);
  }, [searchText]);

  return {
    searchText,
    setSearchText,
    showSearchResults,
    setShowSearchResults,
    filteredProducts,
    ref,
  };
}
