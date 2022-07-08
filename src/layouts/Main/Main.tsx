// eslint-disable-next-line simple-import-sort/imports
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import { compose } from 'recompose';
import ReactGA from 'react-ga4';

import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Loader from '@components/Loader';
import withParallax from '@components/Parallax/withParallax';
import withScrollJack from '@components/ScrollJack/withScrollJack';

import { IS_BROWSER, IS_PRODUCTION, Meta } from '@shared/constants';
import withLoader, { useLoader } from '@shared/hocs/withLoader';
import withMedia from '@shared/hocs/withMedia';
import { FADE } from '@shared/transitions';
import { gameSchema, organizationSchema } from '@shared/seo-schema';

import '@assets/styles/global.scss';

import * as styles from './Main.module.scss';
import { ParallaxLayer } from '@components/Parallax';
import withNFTModal from '@shared/hocs/withNFTModal';
import { useLocation } from '@reach/router';

const gaID = 'G-P1NCWMLSS1';

type MainProps = {
  children?: React.ReactNode
}

function Main({ children }: MainProps) {
  const loadingInterval = useRef<ReturnType<typeof setInterval>>();
  const { loading, progress, setLoading } = useLoader();
  const location = useLocation();

  const is404 = location.pathname !== '/' && location.pathname !== '/founder-collection/';

  useEffect(() => {
    if (!IS_BROWSER) return;

    document.body.classList.toggle('body--loading', loading);
  }, [ loading ]);

  useEffect(() => {
    if (!IS_BROWSER) return;

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

  useEffect(() => {
    if (!IS_BROWSER) return;

    if (IS_PRODUCTION) {
      ReactGA.initialize(gaID);
    }
  }, []);

  return (
    <>
      <Helmet
        title={ Meta.Index.title }
        defer={ false }
      >
        <html lang="en"/>
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
          content="@helix_metaverse"
        />
        <meta
          name="twitter:creator"
          content="@helix_metaverse"
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
        <meta name="google-site-verification" content="8_dVji5ZO30Qk6I9GT6tMOad15L0jnQQVlV6Fneh_0s" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(gameSchema)}
        </script>
      </Helmet>
      <div className={ styles.layout }>
        <AnimatePresence>
          {
            loading && (
              <Loader
                key="loader"/>
            )
          }

          {
            !is404 && <motion.div
              key="header"
              variants={ FADE.variants }
              initial="initial"
              animate="enter"
              exit="exit"
              transition={ { delay: 1 } }
            >
              <Header/>
            </motion.div>
          }

          <ParallaxLayer force={ 5 }
            key="frame"
            depth={ 50 }
            className={ styles.frame }
            variants={ FADE.variants }
            initial="initial"
            animate="enter"
            exit="exit"
            transition={ { delay: 1 } }
          />

          <main
            key="main"
            className={ styles.main }>
            {children}
          </main>

          {
            !is404 && <motion.div
              key="bottombar"
              variants={ FADE.variants }
              initial="initial"
              animate="enter"
              exit="exit"
              transition={ { delay: 1 } }
            >
              <BottomBar/>
            </motion.div>
          }
        </AnimatePresence>

        <div className={ styles.overlay }/>
      </div>
    </>
  );
}

export default compose(
  withMedia,
  withLoader,
  withParallax,
  withScrollJack,
  withNFTModal
)(React.memo(Main));