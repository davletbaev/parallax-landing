import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import * as styles from './ScrollProgress.module.scss';

function ScrollProgress() {
  const { scrollYProgress } = useViewportScroll();

  const width = useTransform(scrollYProgress, (value) => `${ value * 100}%`);

  return (
    <div className={ styles.container }>
      <motion.div style={ { width } } className={ styles.indicator } />
    </div>
  );
}

export default ScrollProgress;