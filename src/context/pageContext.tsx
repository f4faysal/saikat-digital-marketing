'use client';

import debounce from '@/lib/debounce';
import Lenis from '@studio-freight/lenis';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';

interface PageContextType {
  lenis: Lenis | null;
}

const PageContext = createContext<PageContextType>({
  lenis: null
});

export const PageProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reqIdRef = useRef<number | null>(null);

  useEffect((): any => {
    const animate = (time: number) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () =>
      reqIdRef.current !== null && cancelAnimationFrame(reqIdRef.current);
  }, [lenis]);

  useLayoutEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      //  smoothTouch: false,
      touchMultiplier: 2
    });

    let lastHeight = 0;
    let hideNav = false;
    let isScrolled = false;

    lenisInstance.on('scroll', ({ scroll }: { scroll: number }) => {
      debounce(() => (lastHeight = scroll))();

      if (lastHeight < scroll && scroll > 160 && !hideNav) {
        document.body.classList.add('hide_header');
        hideNav = true;
      }
      if (lastHeight >= scroll && scroll > 160 && hideNav) {
        document.body.classList.remove('hide_header');
        hideNav = false;
      }

      if (lastHeight < scroll && scroll > 220 && !isScrolled) {
        document.body.classList.add('scrolled');
        isScrolled = true;
      }

      if (lastHeight >= scroll && scroll < 220 && isScrolled) {
        document.body.classList.remove('scrolled');
        isScrolled = false;
      }
    });
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  const memoedValue = useMemo(
    () => ({
      lenis
    }),
    [lenis]
  );

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};

export default function usePage() {
  return useContext(PageContext);
}
