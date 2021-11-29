import React from 'react';
import { compose } from 'recompose';

import BackgroundVideo from '@components/BackgroundVideo';
import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Loader from '@components/Loader';
import ScrollProgress from '@components/ScrollProgress';

import * as styles from './Main.module.scss';

import '@assets/styles/global.scss';

import withLoader, { useLoader } from '@shared/hocs/withLoader';
import withMedia from '@shared/hocs/withMedia';
import withParallax from '@shared/hocs/withParallax';

type MainProps = {
  children?: React.ReactNode
}

function Main({ children }: MainProps) {
  const { loading } = useLoader();

  return (
    <div className={ styles.layout }>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <ScrollProgress />
            <Header />

            <main>
              { children }
            </main>

            <BottomBar />
          </>
        )
      }

      <BackgroundVideo />
    </div>
  );
}

export default compose(
  withMedia,
  withLoader,
  withParallax
)(Main);