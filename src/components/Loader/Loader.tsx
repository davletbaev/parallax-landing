import React, { useRef } from 'react';
<<<<<<< HEAD

=======
import { motion } from 'framer-motion';

import Container from '@components/Container';
>>>>>>> 252e79ebfabd8870d1969f34a57126fe34259520
import Logo from '@components/Logo';
import ProgressBar from '@components/ProgressBar';

import { useLoader } from '@shared/hocs/withLoader';

import * as styles from './Loader.module.scss';

<<<<<<< HEAD
=======
import { FADE } from '@shared/transitions';

>>>>>>> 252e79ebfabd8870d1969f34a57126fe34259520
function Loader() {
  const { progress } = useLoader();
  
  return (
<<<<<<< HEAD
    <div className={ styles.loader }>
      <div className={ styles.logo }>
        <Logo to={ null } large animate />
      </div>

      <div className={ styles.progress }>
        <ProgressBar progress={ progress } />
        <div className={ styles.description }>Loading experience...</div>
      </div>
    </div>
=======
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
>>>>>>> 252e79ebfabd8870d1969f34a57126fe34259520
  );
}

export default Loader;