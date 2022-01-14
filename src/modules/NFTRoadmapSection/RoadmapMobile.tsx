import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import Roadmap from '@components/Roadmap';

import { NFT_ROADMAP_ITEMS } from '@shared/constants';
import { FADE, SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function RoadmapMobile({ 
  id,
}: SectionProps) {
  return (
    <Container id={ id } as="section">
      <ParallaxLayer 
        force={ 15 }
        depth={ 150 }
        className={ styles.section }
      >
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={ SLIDE_LEFT_WITH_FADE.variants }
          transition={ SLIDE_LEFT_WITH_FADE.options }
        >
          <Roadmap items={ NFT_ROADMAP_ITEMS } />
        </motion.div>
      </ParallaxLayer>

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
          src="./roadmap.jpg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default RoadmapMobile;