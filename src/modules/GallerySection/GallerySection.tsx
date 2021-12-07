import React from 'react';

import Container from '@components/Container';
import Gallery from '@components/Gallery';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './GallerySection.module.scss';

import { SectionProps } from '@shared/types/modules';
import { motion } from 'framer-motion';

const IMAGES = [
  'https://source.unsplash.com/400x400/?cars&sig=1',
  'https://source.unsplash.com/400x400/?games&sig=2',
  'https://source.unsplash.com/400x400/?weapons&sig=3',
  'https://source.unsplash.com/400x400/?market&sig=4',
];

function GallerySection({ 
  id, 
}: SectionProps) {
  const renderImages = () => IMAGES.map((url, index) => (
    <img className={ styles.image } key={ index } src={ url } loading="lazy" />
  ));

  return (
    <Container id={ id } as="section">
      <motion.div 
        className={ styles.section }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ { staggerChildren: 0.15 } }
      >
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
      </motion.div>
    </Container>
  );
}

export default GallerySection;