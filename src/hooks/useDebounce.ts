import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, wait?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), wait || 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value, wait]);

  return debouncedValue;
};

export default useDebounce;
