import React from 'react';

import Container from '@components/Container';
import Gallery from '@components/Gallery';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './GallerySection.module.scss';

import { SectionProps } from '@shared/types/modules';

const IMAGES = [
  'https://source.unsplash.com/720x720/?cars&sig=1',
  'https://source.unsplash.com/720x720/?games&sig=2',
  'https://source.unsplash.com/720x720/?weapons&sig=3',
  'https://source.unsplash.com/720x720/?market&sig=4',
];

function GallerySection({ 
  id, 
}: SectionProps) {
  const renderImages = () => IMAGES.map((url, index) => (
    <img className={ styles.image } key={ index } src={ url } loading="lazy" />
  ));

  return (
    <Container id={ id } as="section" className={ styles.section }>
      <div className={ styles.gallery } name="layers"
    data-force={15} data-depth={100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        <Gallery>
          { renderImages() }
        </Gallery>
      </div>
      <div className={ styles.content }>
      <div name="layers"
    data-force={15} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        <Heading type="h2" align="left">
          FOUNDERS NFT COLLECTION
        </Heading>
        </div>

        <div name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
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
      </div>
    </Container>
  );
}

export default GallerySection;