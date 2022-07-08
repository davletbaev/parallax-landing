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
          EACH TRAIT<br /> AS SEPARATE NFT
        </Heading>
      </ParallaxLayer>

      <ParallaxLayer force={ 15 } depth={ 50 }>
        <Paragraph marginTop="24">
          Individual traits within the artwork (such as clothing, vehicle) will be airdropped to holders as separate NFTs upon early access to HELIX.
        </Paragraph>
        <Paragraph>
          Each of these NFT items are “Founder Edition” and will never be minted additionally. If you choose to resell them, it will not affect your ownership of the original artwork NFT.
        </Paragraph>
        <Paragraph>
          Watch the video to get a preview of the items.
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
          src="./feature-1.jpg"
          alt="NFT car"
        />
      </ParallaxCard>
    </TextSection>
  );
}

export default FirstFeature;