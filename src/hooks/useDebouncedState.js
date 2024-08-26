import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

const useDebouncedState = (initialValue, delay = 300) => {
  const [value, setValue] = useState(initialValue);

  const debouncedSetValue = useCallback(
    debounce((newValue) => setValue(newValue), delay),
    []
  );

  return [value, debouncedSetValue];
};

export default useDebouncedState;
