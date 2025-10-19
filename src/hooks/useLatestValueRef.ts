import { useRef, useEffect } from 'react';

/**
 * 获取最新值的 ref hook
 * @param value 要跟踪的值
 * @returns 包含最新值的 ref
 */
export function useLatestValueRef<T>(value: T) {
  const ref = useRef<T>(value);
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref;
}