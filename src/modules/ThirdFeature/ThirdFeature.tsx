import React from 'react';

import TextSection from '@modules/TextSection';

import { Heading, Paragraph } from '@components/Typography';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

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
       <div name="layers"
    data-force={15} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <Heading type="h2" align="left">
          PLAY TO EARN
      </Heading>
      </div>

      
      <div name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <Paragraph marginTop="24">
          Welcome to the era of earning money for playing games.
      </Paragraph>
      <Paragraph>
          HELIX features competitive PvP game modes and events where you can win tokens
      </Paragraph>
      </div>
    </TextSection>
  );
}

export default ThirdFeature;