import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { compose } from 'recompose';

import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Loader from '@components/Loader';
import withParallax from '@components/Parallax/withParallax';
import ScrollProgress from '@components/ScrollProgress';

import { Meta } from '@shared/constants';
import withLoader, { useLoader } from '@shared/hocs/withLoader';
import withMedia from '@shared/hocs/withMedia';
import withScrollJack from '@components/ScrollJack/withScrollJack';
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
    document.body.classList.toggle('body--loading', loading);
  }, [ loading ]);

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
      <Helmet 
        title={ Meta.Index.title }
        defer={ false }
      >
        <meta
          name="description"
          content={ Meta.Index.description }
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content={ Meta.Index.title }
        />
        <meta
          property="og:description"
          content={ Meta.Index.description }
        />
        <meta
          property="og:url"
          content={ Meta.Index.url }
        />
        <meta
          property="og:image"
          content={ Meta.Index.preview }
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="600"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content="@helix"
        />
        <meta
          name="twitter:creator"
          content="@helix"
        />
        <meta
          name="twitter:title"
          content={ Meta.Index.title }
        />
        <meta
          name="twitter:description"
          content={ Meta.Index.description }
        />
        <meta
          name="twitter:image"
          content={ Meta.Index.preview }
        />
      </Helmet>
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

      <div className={ styles.overlay } />
      {/* <DotGrid /> */}
    </div>
  );
}

export default compose(
  withMedia,
  withLoader,
  withParallax,
  withScrollJack
)(React.memo(Main));