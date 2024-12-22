import { useEffect, useState } from "react";

export const useDebounce = ({value, debounceTime}:{value: string, debounceTime: number}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, debounceTime]);

  return debouncedValue;
};