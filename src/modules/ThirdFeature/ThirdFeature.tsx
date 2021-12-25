import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TextSection from '@modules/TextSection';

import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
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
      <ParallaxLayer force={ 15 } depth={ 150 }>
        <Heading type="h2" align="left">
            PLAY TO EARN
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 50 }>
        <Paragraph marginTop="24">
          In addition to collecting items and meeting new people, HELIX features competitive PvP game modes and events where you can win tokens
        </Paragraph>
        <Paragraph>
          Welcome to the era of earning money for playing games.
        </Paragraph>
        <Paragraph>
          <b>HELIX</b>
        </Paragraph>
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
          src="./feature-3.jpeg"
          alt=""
        />
      </ParallaxCard>
    </TextSection>
  );
}

export default ThirdFeature;