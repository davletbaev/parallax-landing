import React, { MouseEventHandler } from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import { Heading } from '@components/Typography';

import * as styles from './MainScreen.module.scss';

import { SectionProps } from '@shared/types/modules';

function MainScreen({ id }: SectionProps) {
  const handleTrailerButtonClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    document.querySelector('#trailer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container id={ id } as="section" className={ styles.section }>
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
        onClick={ handleTrailerButtonClick }
      >
        Watch Trailer
      </Button>
    </Container>
  );
}

export default MainScreen;