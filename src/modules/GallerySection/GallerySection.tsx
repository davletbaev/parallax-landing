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

// import image1 from './image1.jpg';
// import image2 from './image2.jpg';
// import image3 from './image3.jpg';
// import image4 from './image4.jpg';
//
// const IMAGES = [
//   image1,
//   image2,
//   image3,
//   image4,
// ];

function GallerySection({
  id,
}: SectionProps) {
  // const renderImages = () => IMAGES.map((url, index) => (
  //   <img className={ styles.image } key={ index } src={ url } loading="lazy" />
  // ));

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
            { /*renderImages()*/ }
          </Gallery>
        </ParallaxLayer>

        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 150 }>
            <Heading type="h2" align="left">
          LAND SALE PHASE 1
            </Heading>
          </ParallaxLayer>

          <ParallaxLayer force={ 15 } depth={ 50 }>
            <Paragraph marginTop="24">
              - 25,000 / 45,000 land plots in Parallel City available to mint
            </Paragraph>
            <Paragraph>
              - Land ownership across every game server instance
            </Paragraph>
            <Paragraph>
              - Earn tokens by selling and leasing to players
            </Paragraph>
            <Paragraph>
              - Staking rewards
            </Paragraph>
            <Paragraph>
              Join our <a href="https://discord.gg/helixmetaverse" target="_blank" className="white">Discord</a> for more info and WL opportunities.
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
          src="./landsale2.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default GallerySection;
