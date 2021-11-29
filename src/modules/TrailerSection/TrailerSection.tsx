import React from 'react';

import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import * as styles from './TrailerSection.module.scss';

import trailerSrc from '@assets/video/trailer.mp4';

type TrailerSectionProps = {
  scrollHeight: number,
}

function TrailerSection({ 
  scrollHeight, 
}: TrailerSectionProps) {
  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <div className={ styles.video }>
          <VideoPlayer src={ trailerSrc } />
        </div>
        <div className={ styles.content }>
          <Heading type="h2" align="left">
            HELIX
          </Heading>
          <Paragraph marginTop="24">
            Hyper Expansive Lifelike Interoperable eXperience — is a massively multiplayer game built on the concepts of a persistent open world and true digital ownership.
          </Paragraph>
          <Paragraph>
            Immerse yourself in Parallel City, a meticulously detailed reimagination of New York where you can explore freely, meet new friends, play games, and earn money.
          </Paragraph>
          <Paragraph>
            Every item can be bought, sold, or exchanged for real money.
          </Paragraph>
        </div>
      </Container>
    </div>
  );
}

export default TrailerSection;