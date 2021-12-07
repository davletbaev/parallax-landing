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
            10,000 unique generative artworks with exclusive benefits
          </Paragraph>
          <Paragraph>
            Fully playable character within HELIX
          </Paragraph>
          <Paragraph>
            Individual traits airdropped as separate NFTs and much more
          </Paragraph>
        </div>
      </motion.div>
    </Container>
  );
}

export default GallerySection;