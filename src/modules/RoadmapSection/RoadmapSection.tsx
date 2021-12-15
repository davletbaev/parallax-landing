import React from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import Roadmap from '@components/Roadmap';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './RoadmapSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function RoadmapSection({ 
  id,
}: SectionProps) {
  return (
    <Container id={ id } as="section" className={ styles.section }>
            
      <Heading type="h2" className={ styles.heading }>
          Roadmap
      </Heading>

      
      <div className={ styles.content } name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out",display:"block"}}>
        <Paragraph marginTop="24">
          HELIX is in continual development and aiming for an early access build (pre-alpha) by Q2-Q3 of 2022. We’ll be regularly updating on.. 
        </Paragraph>
        <Paragraph marginBottom="24">
          For a more detailed.. visit our whitepaper for more info.
        </Paragraph>

        <Button href="#">
          READ WHITEPAPER
        </Button>
        </div>
      <div className={ styles.roadmap } name="layers"
    data-force={15} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out",display:"block"}}>
        <Roadmap />
      </div>
    </Container>
  );
}

export default RoadmapSection;