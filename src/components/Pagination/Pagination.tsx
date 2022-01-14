import React, { useEffect, useRef, useState } from 'react';

import { useScrollJack } from '@components/ScrollJack/withScrollJack';

import * as styles from './Pagination.module.scss';

function Pagination() {
  const featuresCount = useRef('04');
  const [ currentIndex, setCurrentIndex ] = useState<string | null>(null);
  const { currentSectionId } = useScrollJack();

  useEffect(() => {
    if (!currentSectionId?.startsWith('feature')) {
      setCurrentIndex(null);
  
      return;
    }

    setCurrentIndex(currentSectionId.slice(-1).padStart(2, '0'));
  }, [ currentSectionId ]);

  if (!currentIndex) {
    return null;
  }

  return (
    <div className={ styles.pagination } name="layers"
    data-force={10} data-depth={-100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <span className={ styles.item }>
        { currentIndex }
      </span>
      <span className={ styles.divider }>
          /
      </span>
      <span className={ styles.item }>
        { featuresCount.current }
      </span>
    </div>
  );
}

export default Pagination;