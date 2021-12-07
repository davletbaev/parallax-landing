import React from 'react';
import { motion } from 'framer-motion';

import Button from '@components/Button';
import Container from '@components/Container';
import { Heading } from '@components/Typography';

import * as styles from './MainScreen.module.scss';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE, SLIDE_TOP_WITH_FADE } from '@shared/transitions';

function MainScreen({ id }: SectionProps) {
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
          transition={ SLIDE_TOP_WITH_FADE.options }
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
          transition={ SLIDE_BOTTOM_WITH_FADE.options }
        >
          <Button 
            href="#trailer"
          >
          Watch Trailer
          </Button>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default MainScreen;