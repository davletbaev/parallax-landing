import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TextSection from '@modules/TextSection';

import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import { SectionProps } from '@shared/types/modules';

import * as styles from '../TextSection/TextSection.module.scss';

function SecondFeature({
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
            TRUE DIGITAL<br /> OWNERSHIP
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 50 }>
        <Paragraph marginTop="24">
        Create, buy, or sell fully customizable virtual items such as clothes, accessories, vehicles, properties, and more. 
        </Paragraph>
        <Paragraph>
        Every item holds real-world value and can be freely traded on a decentralized open market.
        </Paragraph>
        <Paragraph>
        Onced purchased, an item is yours forever.
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
          src="./feature-2.jpeg"
          alt=""
        />
      </ParallaxCard>
    </TextSection>
  );
}

export default SecondFeature;
