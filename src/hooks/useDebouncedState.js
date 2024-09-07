import { useState, useMemo } from 'react';
import { debounce } from 'lodash';

/**
 * 입력창 성능 개선을 위한 debounce hook
 * @author 이주현
 * @since 2024.08.27
 * @version 1.0
 *
 * <pre>
 * 수정일       수정자      수정내용
 * ----------  --------    ---------------------------
 * 2024.08.27  이주현      최초 생성
 * </pre>
 */

const useDebouncedState = (initialValue, delay = 300) => {
  const [value, setValue] = useState(initialValue);
  const debouncedSetValue = useMemo(() => debounce(setValue, delay), [delay]);

  return [value, debouncedSetValue];
};

export default useDebouncedState;
