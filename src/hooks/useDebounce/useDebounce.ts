import { useEffect, useState } from 'react';

const useDebounce = (inputValue: string = '', delayTime: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<string>(inputValue);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delayTime);

    return () => {
      clearTimeout(timeOut); // Clear timeout on unmount
    };
  }, [inputValue]); // Only re-run the effect if inputValue changes

  return {
    debounceValue,
  };
};

export { useDebounce };
