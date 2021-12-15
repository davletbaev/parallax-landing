import React from 'react';
import { compose } from 'recompose';

import BackgroundVideo from '@components/BackgroundVideo';
import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Loader from '@components/Loader';
import ScrollProgress from '@components/ScrollProgress';

import withLoader, { useLoader } from '@shared/hocs/withLoader';
import withMedia from '@shared/hocs/withMedia';
import withSections from '@shared/hocs/withSections';

import * as styles from './Main.module.scss';

import '@assets/styles/global.scss';

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

            <main className={ styles.main }>
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
  withSections,
)(React.memo(Main));