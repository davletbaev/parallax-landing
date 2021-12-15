import React, { useEffect, useRef, useState } from 'react';

import { SECTIONS } from '@shared/constants';
import { useSections } from '@shared/hocs/withSections';

import * as styles from './Pagination.module.scss';

function Pagination() {
  const featuresCount = useRef('04');
  const [ current, setCurrent ] = useState<string | null>(null);
  const { currentSection } = useSections();

  const section = SECTIONS[currentSection].id;

  useEffect(() => {
    if (!section.startsWith('feature')) {
      setCurrent(null);
  
      return;
    }

    setCurrent(section.slice(-1).padStart(2, '0'));
  }, [ section ]);

  if (!current) {
    return null;
  }

  return (
    <div className={ styles.pagination } name="layers"
    data-force={10} data-depth={-100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <span className={ styles.item }>
        { current }
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