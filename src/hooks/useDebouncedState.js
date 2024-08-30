import { useState, useMemo } from 'react';
import { debounce } from 'lodash';

const useDebouncedState = (initialValue, delay = 300) => {
  const [value, setValue] = useState(initialValue);

  const debouncedSetValue = useMemo(() => debounce(setValue, delay), [delay]);

  return [value, debouncedSetValue];
};

export default useDebouncedState;
