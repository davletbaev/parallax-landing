import React from 'react';

import TextSection from '@modules/TextSection';

import { Heading, Paragraph } from '@components/Typography';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

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
      <Heading
        type="h2"
        align="left">
        CUTTING-EDGE<br /> GRAPHICS
      </Heading>
      <Paragraph marginTop="24">
        True immersion starts with life-like visual quality and clarity.
      </Paragraph>
      <Paragraph>
        HELIX features thousands of incredibly detailed, custom modeled environments, vehicles and items, from billboards down to strands of hair on your avatar.
      </Paragraph>
    </TextSection>
  );
}

export default FirstFeature;