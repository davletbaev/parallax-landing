import React from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import Roadmap from '@components/Roadmap';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './RoadmapSection.module.scss';

type RoadmapSectionProps = {
  scrollHeight: number,
}

function RoadmapSection({ 
  scrollHeight,
}: RoadmapSectionProps) {
  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <Heading type="h2" className={ styles.heading }>
            Roadmap
        </Heading>
          
        <div className={ styles.content }>
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

        <div className={ styles.roadmap }>
          <Roadmap />
        </div>
      </Container>
    </div>
  );
}

export default RoadmapSection;