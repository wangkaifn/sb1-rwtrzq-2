import { useRef, useState, useEffect, useCallback } from 'react';
import { SCROLL_AMOUNT } from '../constants';

interface UseCarouselScrollProps {
  itemWidth: number;
}

export const useCarouselScroll = ({ itemWidth }: UseCarouselScrollProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  }, []);

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [checkScrollButtons]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = itemWidth * SCROLL_AMOUNT;
      const newScrollLeft = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [itemWidth]);

  return {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    checkScrollButtons,
    scroll
  };
};