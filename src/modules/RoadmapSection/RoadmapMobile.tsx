import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import Roadmap from '@components/Roadmap';

import { FADE, SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function RoadmapMobile({ 
  id,
}: SectionProps) {
  return (
    <Container id={ id } as="section">
      <motion.div 
        className={ styles.section }
        initial="initial"
        animate="enter"
        exit="exit"
        variants={ SLIDE_LEFT_WITH_FADE.variants }
        transition={ SLIDE_LEFT_WITH_FADE.options }
      >
        <Roadmap />
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

export default RoadmapMobile;