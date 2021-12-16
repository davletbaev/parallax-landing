import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { compose } from 'recompose';

import BackgroundVideo from '@components/BackgroundVideo';
import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Loader from '@components/Loader';
import ScrollProgress from '@components/ScrollProgress';

import withLoader, { useLoader } from '@shared/hocs/withLoader';
import withMedia from '@shared/hocs/withMedia';
import withScrollJack from '@shared/hocs/withScrollJack';

import * as styles from './Main.module.scss';

import '@assets/styles/global.scss';

import { FADE } from '@shared/transitions';

type MainProps = {
  children?: React.ReactNode
}

function Main({ children }: MainProps) {
  const { loading } = useLoader();

  return (
    <div className={ styles.layout }>
      <AnimatePresence>
        {
          loading ? (
            <Loader />
          ) : (
            <>
              <motion.div 
                variants={ FADE.variants }
                initial="initial"
                animate="enter"
                exit="exit"
                transition={ { delay: 1 } }
              >
                <ScrollProgress />
                <Header />
              </motion.div>

              <main className={ styles.main }>
                { children }
              </main>

              <motion.div 
                variants={ FADE.variants }
                initial="initial"
                animate="enter"
                exit="exit"
                transition={ { delay: 1 } }
              >
                <BottomBar />
              </motion.div>
            </>
          )
        }
      </AnimatePresence>

      <BackgroundVideo />
    </div>
  );
}

export default compose(
  withMedia,
  withLoader,
  withScrollJack
)(React.memo(Main));