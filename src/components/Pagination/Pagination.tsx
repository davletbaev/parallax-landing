import React, { useEffect, useRef, useState } from 'react';

import { useScrollJack } from '@shared/hocs/withScrollJack';

import * as styles from './Pagination.module.scss';

function Pagination() {
  const featuresCount = useRef('04');
  const [ currentIndex, setCurrentIndex ] = useState<string | null>(null);
  const { currentSectionId } = useScrollJack();

  useEffect(() => {
    if (!currentSectionId.startsWith('feature')) {
      setCurrentIndex(null);
  
      return;
    }

    setCurrentIndex(currentSectionId.slice(-1).padStart(2, '0'));
  }, [ currentSectionId ]);

  if (!currentIndex) {
    return null;
  }

  return (
    <div className={ styles.pagination }>
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