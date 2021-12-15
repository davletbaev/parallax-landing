import React from 'react';

import Carousel from '@components/Carousel';

import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './Gallery.module.scss';

type GalleryProps = {
  children: React.ReactNode
}

function Gallery({ children }: GalleryProps) {
  const { isDesktop } = useMedia();

  const renderChildren = () => React.Children.map(children, (child) => (
    <div className={ styles.item }>
      { child }
    </div>
  ));
  
  if (isDesktop) {
    return (
      <div className={ styles.gallery }>
        { renderChildren() }
      </div>
    );
  }

  return (
    <Carousel>
      { renderChildren() }
    </Carousel>
  );
}

export default Gallery;