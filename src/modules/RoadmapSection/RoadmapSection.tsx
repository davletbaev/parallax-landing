import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import Roadmap from '@components/Roadmap';
import { Heading, Paragraph } from '@components/Typography';

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
        <Heading type="h2" className={ styles.heading }>
          Roadmap
        </Heading>
          
        <div className={ styles.content }>
          <Paragraph marginTop="24">
            HELIX is currently in development, with an early access pre-alpha release aiming for Q2 2022. We’ll be actively updating our development progress on Discord, Twitter, and YouTube.
          </Paragraph>
          <Paragraph marginBottom="24">
            Read our interactive whitepaper / wiki for more details about game development and the game itself.
          </Paragraph>

          <motion.div
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <Button href="#">
              READ WHITEPAPER
            </Button>
          </motion.div>
        </div>

        {
          isTabletOrBigger && (
            <motion.div 
              className={ styles.roadmap }
              variants={ SLIDE_BOTTOM_WITH_FADE.variants }
              transition={ SLIDE_BOTTOM_WITH_FADE.options }>
              <Roadmap />
            </motion.div>
          )
        }
      </motion.div>

      <motion.div key="roadmap"
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
      </motion.div>
    </Container>
  );
}

export default RoadmapSection;