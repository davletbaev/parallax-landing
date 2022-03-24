import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

import * as styles from './ScrollProgress.module.scss';

type ScrollProgressProps = {
  progress: number
}

function ScrollProgress({ progress }: ScrollProgressProps) {
  const percentage = useSpring(0);

  const width = useTransform(percentage, (value) => `${value * 100}%`);

  useEffect(() => {
    percentage.set(progress);
  }, [ progress ]);

  return (
    <div className={ styles.container }>
      <motion.div style={ { width } } className={ styles.indicator } />
    </div>
  );
}

export default ScrollProgress;