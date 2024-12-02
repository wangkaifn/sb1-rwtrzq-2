import React, { memo } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselButtonProps } from './types';
import styles from './styles/carousel.module.less';
import classNames from 'classnames';

export const CarouselButton = memo<CarouselButtonProps>(({
  direction,
  onClick,
  disabled = false,
}) => {
  const Icon = direction === 'left' ? LeftOutlined : RightOutlined;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, styles[direction])}
      aria-label={`向${direction === 'left' ? '左' : '右'}滚动`}
    >
      <Icon style={{ fontSize: '20px' }} />
    </button>
  );
});