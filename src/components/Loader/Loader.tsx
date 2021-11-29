import React from 'react';

import Logo from '@components/Logo';

import * as styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={ styles.loader }>
      <Logo />
    </div>
  );
}

export default Loader;