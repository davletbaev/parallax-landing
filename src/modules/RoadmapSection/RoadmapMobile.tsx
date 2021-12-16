import React from 'react';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import Roadmap from '@components/Roadmap';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

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
    </Container>
  );
}

export default RoadmapMobile;