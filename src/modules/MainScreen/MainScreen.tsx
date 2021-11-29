import React from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import { Heading } from '@components/Typography';

import * as styles from './MainScreen.module.scss';

type MainScreenProps = {
  scrollHeight: number
}

function MainScreen({ scrollHeight }: MainScreenProps) {
  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <p className={ styles.subheading }>Welcome to</p>

        <Heading 
          type="h1"
          className={ styles.heading }
        >
        THE
          {' '}
          <br className={ styles.onlyMobile } />
        WORLD’S
          {' '}
          <br className={ styles.onlyMobile } />
        FIRST
          {' '}
          <br className={ styles.onlyMobile } />
        TRULY
          <br />
        IMMERSIVE
          {' '}
          <br className={ styles.onlyMobile } />
        METAVERSE
        </Heading>

        <Button 
          href="#trailer"
          className={ styles.button }
        >
        Watch Trailer
        </Button>
      </Container>
    </div>
  );
}

export default MainScreen;