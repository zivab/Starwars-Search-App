import { useState, useEffect } from 'react';

interface UseDebounce {
  value: string;
  delay?: number;
}

const useDebounce = ({ value, delay = 500 }: UseDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
