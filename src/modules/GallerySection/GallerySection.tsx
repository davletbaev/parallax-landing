import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import Gallery from '@components/Gallery';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { FADE } from '@shared/transitions';

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
        <ParallaxLayer force={ 15 } depth={ 100 } className={ styles.gallery }>
          <Gallery>
            { renderImages() }
          </Gallery>
        </ParallaxLayer>

        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 150 }>
            <Heading type="h2" align="left">
          FOUNDERS NFT COLLECTION
            </Heading>
          </ParallaxLayer>

          <ParallaxLayer force={ 15 } depth={ 50 }>
            <Paragraph marginTop="24">
              10,000 unique generative artworks with exclusive benefits
            </Paragraph>
            <Paragraph>
              Fully playable character within HELIX
            </Paragraph>
            <Paragraph>
              Individual traits airdropped as separate NFTs and much more
            </Paragraph>
          </ParallaxLayer>
          <ParallaxLayer
            force={ 15 }
            depth={ 75 }
          >
              <Button href="#" className="oof">
                LEARN MORE
              </Button>
          </ParallaxLayer>
        </div>
      </motion.div>

      <ParallaxCard className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./gallery.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default GallerySection;
