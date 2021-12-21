import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import TextSection from '@modules/TextSection';

import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import { SectionProps } from '@shared/types/modules';

import * as styles from '../TextSection/TextSection.module.scss';

function ThirdFeature({ 
  id,
}: SectionProps) {
  return (
    <TextSection 
      id={ id }
      align="right"
      variants={ {} }
      initial="initial"
      animate="enter"
      exit="exit"
      transition={ SLIDE_BOTTOM_WITH_FADE.options }
    >
      <Heading type="h2" align="left">
          PLAY TO EARN
      </Heading>
      <Paragraph marginTop="24">
        In addition to collecting items and meeting new people, HELIX features competitive PvP game modes and events where you can win tokens
      </Paragraph>
      <Paragraph>
        Welcome to the era of earning money for playing games.
      </Paragraph>
      <Paragraph>
        <b>HELIX</b>
      </Paragraph>

      <motion.div className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./feature-3.jpeg"
          alt=""
        />
      </motion.div>
    </TextSection>
  );
}

export default ThirdFeature;