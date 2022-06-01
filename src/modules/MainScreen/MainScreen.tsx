import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import Icon from '@components/Icon';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading } from '@components/Typography';

import { useNFTModal } from '@shared/hocs/withNFTModal';
import { FADE, SLIDE_BOTTOM_WITH_FADE, SLIDE_TOP_WITH_FADE } from '@shared/transitions';

import * as styles from './MainScreen.module.scss';

import { SectionProps } from '@shared/types/modules';

function MainScreen({ id }: SectionProps) {
  const { openModal } = useNFTModal();

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
          >WELCOME TO
          </motion.p>
        </ParallaxLayer>

        <ParallaxLayer force={ 18 } depth={ 100 }>
          <Heading
            type="h1"
            className={ styles.heading }
          >
              THE
            {' '}
            <br className={ styles.onlyMobile }/>
              WORLD’S
            {' '}
            <br className={ styles.onlyMobile }/>
              FIRST
            {' '}
            <br className={ styles.onlyMobile }/>
              TRULY
            <br/>
              IMMERSIVE
            {' '}
            <br className={ styles.onlyMobile }/>
              METAVERSE
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer
          force={ 30 }
          depth={ 50 }
          className={ styles.button }
        >
          <motion.a
            href="#trailer"
            className={ styles.playButton }
            variants={ FADE.variants }
            transition={ FADE.options }
          >
            <Icon icon="play"/>
          </motion.a>
        </ParallaxLayer>

        <ParallaxLayer
          force={ 15 }
          depth={ 50 }
          className={ styles.button }
          variants={ SLIDE_BOTTOM_WITH_FADE.variants }
          transition={ SLIDE_BOTTOM_WITH_FADE.options }
        >
          <Button onClick={ openModal }>
              Claim Free NFT
          </Button>
          <Button
            className={ styles.secondaryButton }
            variant="ghost"
            href="#trailer"
          >
              Watch Teaser
          </Button>
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
          src="./main.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default MainScreen;
