import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TextSection from '@modules/TextSection';

import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import { SectionProps } from '@shared/types/modules';

import * as styles from '../TextSection/TextSection.module.scss';

function FirstFeature({
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
        <Heading
          type="h2"
          align="left">
          CUTTING-EDGE<br /> GRAPHICS
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 50 }>
        <Paragraph marginTop="24">
          True immersion starts with life-like visual quality and fidelity.
        </Paragraph>
        <Paragraph>
          HELIX features thousands of incredibly detailed environments, vehicles, items, and more with immaculate attention to detail.
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
          src="./feature-1.jpeg"
          alt="Person in sportswear going through the park"
        />
      </ParallaxCard>
    </TextSection>
  );
}

export default FirstFeature;