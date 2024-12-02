import React from 'react';
import { CarouselButton } from './CarouselButton';
import { useCarouselScroll } from './hooks/useCarouselScroll';
import { CarouselProps } from './types';
import { ITEM_WIDTH } from './constants';
import styles from './styles/carousel.module.less';

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    checkScrollButtons,
    scroll
  } = useCarouselScroll({ itemWidth: ITEM_WIDTH });

  return (
    <div className={styles.carousel}>
      <CarouselButton
        direction="left"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
      />
      
      <div
        ref={scrollContainerRef}
        className={styles.carouselContainer}
        onScroll={checkScrollButtons}
      >
        {children}
      </div>

      <CarouselButton
        direction="right"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
      />
    </div>
  );
};