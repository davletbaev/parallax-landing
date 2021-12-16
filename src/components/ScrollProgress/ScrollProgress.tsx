import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { MOBILE_SECTIONS, SECTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { useScrollJack } from '@shared/hocs/withScrollJack';

import * as styles from './ScrollProgress.module.scss';

function ScrollProgress() {
  const { isMobile } = useMedia();
  const sections = useRef(isMobile ? MOBILE_SECTIONS : SECTIONS);
  const { currentSectionIndex } = useScrollJack();

  const percentage = useSpring(0);

  const width = useTransform(percentage, (value) => `${value}%`);

  useEffect(() => {
    percentage.set(Math.ceil(currentSectionIndex / (sections.current.length - 1) * 100));
  }, [ currentSectionIndex ]);

  return (
    <div className={ styles.container }>
      <motion.div style={ { width } } className={ styles.indicator } />
    </div>
  );
}

export default ScrollProgress;