import React from 'react';
import { motion } from 'framer-motion';

import Carousel from '@components/Carousel';

import { useMedia } from '@shared/hocs/withMedia';
import { FADE } from '@shared/transitions';

import * as styles from './Gallery.module.scss';

type GalleryProps = {
  children: React.ReactNode
}

const galleryVariants = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? '-10%' : '10%',
    y: index < 2 ? '-10%' : '10%' 
  }),
  enter: {
    opacity: 1,
    x: 0,
    y: 0
  },
  exit: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? '-10%' : '10%',
    y: index < 2 ? '-10%' : '10%' 
  })
};

function Gallery({ children }: GalleryProps) {
  const { isDesktop } = useMedia();

  const renderChildren = () => React.Children.map(children, (child, index) => (
    <motion.div 
      variants={ isDesktop ? galleryVariants : FADE.variants }
      custom={ index }
      className={ styles.item }
      transition={
        isDesktop ? { 
          type: 'spring',
          bounce: 0.15 
        } : FADE.options
      }
    >
      { child }
    </motion.div>
  ));
  
  if (isDesktop) {
    return (
      <motion.div
        variants={ {} }
        className={ styles.gallery }
        transition={ { staggerChildren: 0 } }
      >
        { renderChildren() }
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={ {} }
      transition={ { staggerChildren: 0 } }
    >
      <Carousel>
        { renderChildren() }
      </Carousel>
    </motion.div>
  );
}

export default Gallery;