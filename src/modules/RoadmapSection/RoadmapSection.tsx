import React from 'react';
import { motion } from 'framer-motion';

import Button from '@components/Button';
import Container from '@components/Container';
import Roadmap from '@components/Roadmap';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

function RoadmapSection({ 
  id,
}: SectionProps) {
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
          HELIX is in continual development and aiming for an early access build (pre-alpha) by Q2-Q3 of 2022. We’ll be regularly updating on.. 
          </Paragraph>
          <Paragraph marginBottom="24">
          For a more detailed.. visit our whitepaper for more info.
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

        <motion.div 
          className={ styles.roadmap }
          variants={ SLIDE_BOTTOM_WITH_FADE.variants }
          transition={ SLIDE_BOTTOM_WITH_FADE.options }>
          <Roadmap />
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default RoadmapSection;