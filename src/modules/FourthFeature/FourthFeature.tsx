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
          VIRTUAL LAND
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 150 }>
        <Paragraph marginTop="24">
        Own your very own piece of Parallel City. Develop on your land, stake it for rewards, or lease it to other players for profit.
        </Paragraph>
        <Paragraph>
        More details on the land sale will be announced soon.
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
