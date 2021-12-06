import React, { useRef } from 'react';

import Logo from '@components/Logo';
import ProgressBar from '@components/ProgressBar';

import { useLoader } from '@shared/hocs/withLoader';

import * as styles from './Loader.module.scss';

function Loader() {
  const { progress } = useLoader();
  
  return (
    <div className={ styles.loader }>
      <div className={ styles.logo }>
        <Logo to={ null } large animate />
      </div>

      <div className={ styles.progress }>
        <ProgressBar progress={ progress } />
        <div className={ styles.description }>Loading experience...</div>
      </div>
    </div>
  );
}

export default Loader;