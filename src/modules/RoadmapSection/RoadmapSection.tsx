import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import Roadmap from '@components/Roadmap';
import { Heading, Paragraph } from '@components/Typography';

import { ROADMAP_ITEMS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function RoadmapSection({ 
  id,
}: SectionProps) {
  const { isTabletOrBigger } = useMedia();
  
  return (
    <Container id={ id } as="section">
      <motion.div 
        className={ styles.section }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ { staggerChildren: 0.15 } }
      >
        <ParallaxLayer force={ 15 } depth={ 150 } className={ styles.heading }>
          <Heading type="h2">
            Roadmap
          </Heading>
        </ParallaxLayer>
          
        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 50 }>
            <Paragraph marginTop="24">
            HELIX is currently in development, with an early access pre-alpha release aiming for Q2 2022. We’ll be actively updating our development progress on Discord, Twitter, and YouTube.
            </Paragraph>
            <Paragraph marginBottom="24">
            Read our interactive whitepaper / wiki for more details about game development and the game itself.
            </Paragraph>
          </ParallaxLayer>

          <ParallaxLayer 
            force={ 15 }
            depth={ 75 }
          >
            <motion.div
              variants={ SLIDE_BOTTOM_WITH_FADE.variants }
              transition={ SLIDE_BOTTOM_WITH_FADE.options }
            >
              <Button href="#">
                READ WHITEPAPER
              </Button>
            </motion.div>
          </ParallaxLayer>
        </div>

        {
          isTabletOrBigger && (
            <ParallaxLayer 
              force={ 15 }
              depth={ 150 }
              className={ styles.roadmap }
            >
              <motion.div
                variants={ SLIDE_BOTTOM_WITH_FADE.variants }
                transition={ SLIDE_BOTTOM_WITH_FADE.options }>
                <Roadmap items={ ROADMAP_ITEMS } />
              </motion.div>
            </ParallaxLayer>
          )
        }
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
          src="./roadmap.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default RoadmapSection;