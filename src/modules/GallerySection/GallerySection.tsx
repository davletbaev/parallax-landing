import React from 'react';

import Container from '@components/Container';
import Gallery from '@components/Gallery';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './GallerySection.module.scss';

const IMAGES = [
  'https://source.unsplash.com/720x720/?cars&sig=1',
  'https://source.unsplash.com/720x720/?games&sig=2',
  'https://source.unsplash.com/720x720/?weapons&sig=3',
  'https://source.unsplash.com/720x720/?market&sig=4',
];

type GallerySectionProps = {
  scrollHeight: number,
}

function GallerySection({ 
  scrollHeight, 
}: GallerySectionProps) {

  const renderImages = () => IMAGES.map((url, index) => (
    <img className={ styles.image } key={ index } src={ url } loading="lazy" />
  ));

  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <div className={ styles.gallery }>
          <Gallery>
            { renderImages() }
          </Gallery>
        </div>
        <div className={ styles.content }>
          <Heading type="h2" align="left">
            FOUNDERS NFT COLLECTION
          </Heading>
          <Paragraph marginTop="24">
            10,000 unique generative artworks with exclusive benefits.
          </Paragraph>
          <Paragraph>
            Fully playable avatars within HELIX.
          </Paragraph>
          <Paragraph>
            Individual traits airdropped as in-game items.
          </Paragraph>
          <Paragraph>
            And much more!
          </Paragraph>
        </div>
      </Container>
    </div>
  );
}

export default GallerySection;