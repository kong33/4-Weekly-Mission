import { useEffect, useState } from 'react';

const useDebounce = (value: string, delayTime: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayTime);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debouncedValue;
};

export default useDebounce;
