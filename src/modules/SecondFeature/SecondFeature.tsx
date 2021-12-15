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

<div name="layers"
    data-force={15} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <Heading type="h2" align="left">
          TRUE ITEM<br /> OWNERSHIP
      </Heading>
    </div>

    <div name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <Paragraph marginTop="24">
          With traditional games, you buy an item and.. when you stop playing..
      </Paragraph>
      <Paragraph>
          In HELIX, every item holds real-world value and can be exchanged for money and.. 
      </Paragraph>
      <Paragraph>
          every item is a non-fungible token (NFT) stored on the blockchain for everyone to verify.
      </Paragraph>
      <Paragraph>
          Every item written to the blockchain, where..
      </Paragraph>
      <Paragraph>
          Show off your collection, resell them for profit, or do whatever you want..
      </Paragraph>
      </div>

    </TextSection>
  );
}

export default SecondFeature;