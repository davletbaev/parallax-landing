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
            PLAY AND EARN
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 50 }>
        <Paragraph marginTop="24">
          Choose from several competitive PvP game modes such as Treasure Hunt or Battle Royale. Join matches and events and earn tokens for playing. Compete in higher ranks to earn bigger prizes.
        </Paragraph>
        <Paragraph>
          A fully autonomous Community Treasury will be responsible for establishing public prize pools and payouts.
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
          alt="Man with girl walking through casino"
        />
      </ParallaxCard>
    </TextSection>
  );
}

export default ThirdFeature;