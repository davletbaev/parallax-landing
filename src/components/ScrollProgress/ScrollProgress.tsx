import React from 'react';

import * as styles from './ScrollProgress.module.scss';

import { useParallax } from '@shared/hocs/withParallax';

function ScrollProgress() {
  const progress = useParallax();

  return (
    <div className={ styles.container }>
      <div style={ { width: `${ progress * 100}%` } } className={ styles.indicator } />
    </div>
  );
}

export default ScrollProgress;