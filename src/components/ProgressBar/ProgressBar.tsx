import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

import * as styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  progress: MotionValue<number>
}

function ProgressBar({ progress }: ProgressBarProps) {
  
  const width = useTransform(progress, (progress) => `${progress * 100}%`);
  
  return (
    <div className={ styles.container }>
      <motion.div style={ { width } } className={ styles.indicator } />
    </div>
  );
}

export default ProgressBar;