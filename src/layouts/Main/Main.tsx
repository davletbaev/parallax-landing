import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { compose } from 'recompose';

import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Loader from '@components/Loader';
import DotGrid from '@components/Parallax';
import ScrollProgress from '@components/ScrollProgress';

import withLoader, { useLoader } from '@shared/hocs/withLoader';
import withMedia from '@shared/hocs/withMedia';
import withScrollJack from '@shared/hocs/withScrollJack';
import { FADE } from '@shared/transitions';

import * as styles from './Main.module.scss';

import '@assets/styles/global.scss';

type MainProps = {
  children?: React.ReactNode
}

function Main({ children }: MainProps) {
  const loadingInterval = useRef<ReturnType<typeof setInterval>>();
  const { loading, progress, setLoading } = useLoader();

  useEffect(() => {
    loadingInterval.current = setInterval(() => {
      const currentProgress = progress.get();

      if (currentProgress <= 0.9) {
        progress.set(currentProgress + 0.1);
      } else {
        progress.set(1);
        setLoading(false);
        clearInterval(loadingInterval.current as unknown as number);
      }
      
    }, 50);

    return () => {
      clearInterval(loadingInterval.current as unknown as number);
    };
  }, []);

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

      <DotGrid />
    </div>
  );
}

export default compose(
  withMedia,
  withLoader,
  withScrollJack
)(React.memo(Main));