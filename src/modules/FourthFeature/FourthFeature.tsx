import React from 'react';

import TextSection from '@modules/TextSection';

import { Heading, Paragraph } from '@components/Typography';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

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
      <Heading type="h2" align="left">
        COMMUNITY<br /> FIRST
      </Heading>
      <Paragraph marginTop="24">
        HELIX aims to lead the way for an open, fair metaverse with..
      </Paragraph>
      <Paragraph>
        Community Treasury will be responsible for..
      </Paragraph>
    </TextSection>
  );
}

export default FourthFeature;