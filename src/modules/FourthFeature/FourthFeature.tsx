import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TextSection from '@modules/TextSection';

import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import { SectionProps } from '@shared/types/modules';

import * as styles from '../TextSection/TextSection.module.scss';

function FourthFeature({ 
  id,
}: SectionProps) {
  return (
    <TextSection 
      id={ id }
      variants={ {} }
      initial="initial"
      animate="enter"
      exit="exit"
      transition={ SLIDE_BOTTOM_WITH_FADE.options }
    >
      <ParallaxLayer force={ 15 } depth={ 150 }>
        <Heading type="h2" align="left">
          COMMUNITY<br /> FIRST
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 150 }>
        <Paragraph marginTop="24">
          HELIX aims to lead the way for an open, fair metaverse with..
        </Paragraph>
        <Paragraph>
          Community Treasury will be responsible for..
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
          src="./feature-4.jpeg"
          alt=""
        />
      </ParallaxCard>
    </TextSection>
  );
}

export default FourthFeature;