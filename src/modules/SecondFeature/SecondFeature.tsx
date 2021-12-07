import React from 'react';

import TextSection from '@modules/TextSection';

import { Heading, Paragraph } from '@components/Typography';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

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
      <Heading type="h2" align="left">
          TRUE ITEM<br /> OWNERSHIP
      </Heading>
      <Paragraph marginTop="24">
        Collect hundreds of customizable NFT items such as clothes, accessories, skins, vehicles, homes, and more.
      </Paragraph>
      <Paragraph>
        Every item holds real-world value and can be freely traded on a decentralized open market.
      </Paragraph>
      <Paragraph>
        Onced purchased, an item is yours forever.
      </Paragraph>
    </TextSection>
  );
}

export default SecondFeature;