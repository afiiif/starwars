import { useEffect, useRef } from 'react';

export default function useIntersect(
  onIntersect: () => void,
  options: object,
) {
  const ref = useRef(null);

  useEffect(() => {
    const isSupported = 'IntersectionObserver' in window;
    if (!isSupported) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onIntersect(); },
      options,
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, options]);

  return ref;
}
