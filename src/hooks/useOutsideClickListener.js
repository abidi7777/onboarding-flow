import { useEffect, useRef } from 'react';

export default function useOutsideClickListener(cb) {
  const ref = useRef(null);
  const documentClickHandler = (ev) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('click', documentClickHandler);

    return () => document.removeEventListener('click', documentClickHandler);
  }, []);

  return { ref };
}
