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
      <p className={ styles.subheading } name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>Welcome to</p>
<div name="layers"
    data-force={15} data-depth={75}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
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
      </div>

      <div name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <Button 
        href="#trailer"
        className={ styles.button }
        onClick={ handleTrailerButtonClick }
      >
        Watch Trailer
      </Button>
      </div>
    </Container>
  );
}

export default MainScreen;