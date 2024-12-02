import React from 'react';
import { CarouselItemProps } from './types';
import styles from './styles/carouselItem.module.less';

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        {children}
      </div>
    </div>
  );
};