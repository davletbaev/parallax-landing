import React from 'react';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import Gallery from '@components/Gallery';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './GallerySection.module.scss';

import { SectionProps } from '@shared/types/modules';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

const IMAGES = [
  image1,
  image2,
  image3,
  image4,
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