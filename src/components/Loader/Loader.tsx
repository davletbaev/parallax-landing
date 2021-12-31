import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import Logo from '@components/Logo';
import ProgressBar from '@components/ProgressBar';

import { useLoader } from '@shared/hocs/withLoader';
import { FADE } from '@shared/transitions';

import * as styles from './Loader.module.scss';

function Loader() {
  const { progress } = useLoader();
  
  return (
    <motion.div 
      variants={ FADE.variants }
      className={ styles.loader }
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Container className={ styles.container }>
        <div className={ styles.logo }>
          <Logo to={ null } large animate />
        </div>

        <div className={ styles.progress }>
          <ProgressBar progress={ progress } />
          <div className={ styles.description }>Loading experience...</div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Loader;