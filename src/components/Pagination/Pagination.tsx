import React, { useEffect, useRef, useState } from 'react';

import { useSections } from '@shared/hocs/withSections';

import * as styles from './Pagination.module.scss';

function Pagination() {
  const featuresCount = useRef('04');
  const [ currentIndex, setCurrentIndex ] = useState<string | null>(null);
  const { currentSection } = useSections();

  useEffect(() => {
    if (!currentSection.startsWith('feature')) {
      setCurrentIndex(null);
  
      return;
    }

    setCurrentIndex(currentSection.slice(-1).padStart(2, '0'));
  }, [ currentSection ]);

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