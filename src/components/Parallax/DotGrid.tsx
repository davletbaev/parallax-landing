import React from 'react';

import * as styles from './Parallax.module.scss';

import useDotGrid from './useDotGrid';

function DotGrid() {
  const { canvasRef } = useDotGrid();

  return (
    // <div className={ styles.container }>
    <div>
      <canvas ref={ canvasRef } className={ styles.canvas }></canvas>
    </div>
  );
}

export default DotGrid;
