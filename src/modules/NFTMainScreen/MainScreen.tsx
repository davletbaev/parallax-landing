import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE, SLIDE_TOP_WITH_FADE } from '@shared/transitions';

import * as styles from './MainScreen.module.scss';

import { SectionProps } from '@shared/types/modules';

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
        <ParallaxLayer force={ 15 } depth={ 50 }>
          <motion.p 
            className={ styles.subheading }
            variants={ SLIDE_TOP_WITH_FADE.variants }
            transition={ SLIDE_TOP_WITH_FADE.options }
          >Limited Edition</motion.p>
        </ParallaxLayer>

        <ParallaxLayer force={ 15 } depth={ 75 }>
          <Heading 
            type="h1"
            className={ styles.heading }
          >
            Founder
            {' '}
            <br className={ styles.onlyMobile } />
            NFT
            {' '}
            <br className={ styles.onlyMobile } />
            Collection
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer force={ 15 } depth={ 50 }>
          <Paragraph
            size="large"
            marginTop="16"
            align="center"
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            10,000 uniquely generated artworks with exclusive benefits. <br /> 
            Join our Discord for date & price announcement.
          </Paragraph>
        </ParallaxLayer>

        <ParallaxLayer 
          force={ 15 }
          depth={ 50 }
          className={ styles.button }
        >
          <motion.div
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <Button 
              href="#utility"
            >
                Watch NFT Video
            </Button>
          </motion.div>
        </ParallaxLayer>
      </motion.div>

      <ParallaxCard 
        className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./main.jpg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default MainScreen;