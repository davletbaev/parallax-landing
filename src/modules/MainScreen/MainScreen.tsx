import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

import Button from '@components/Button';
import Container from '@components/Container';
import { Heading } from '@components/Typography';

import * as styles from './MainScreen.module.scss';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE, SLIDE_TOP_WITH_FADE } from '@shared/transitions';

function MainScreen({ id }: SectionProps) {
  const handleTrailerButtonClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    document.querySelector('#trailer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container id={ id } as="section" className={ styles.section }>
      <motion.div 
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ { staggerChildren: 0.3 } }
      >
        <motion.p 
          className={ styles.subheading }
          variants={ SLIDE_TOP_WITH_FADE.variants }
        >Welcome to</motion.p>

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

        <motion.div
          className={ styles.button }
          variants={ SLIDE_BOTTOM_WITH_FADE.variants }
        >
          <Button 
            href="#trailer"
            onClick={ handleTrailerButtonClick }
          >
          Watch Trailer
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default MainScreen;