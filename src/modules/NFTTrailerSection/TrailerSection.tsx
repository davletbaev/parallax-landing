import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import { FADE, SLIDE_BOTTOM_WITH_FADE, SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

import * as styles from './TrailerSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function TrailerSection({
  id,
}: SectionProps) {
  const data = useStaticQuery(graphql`
    query NFTTrailerCoverQuery {
      cover: file(relativePath: {eq: "cover.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <Container id={ id } as="section" className={ styles.section }>
      <ParallaxLayer
        force={ 20 }
        depth={ 75 }
        className={ styles.video }
      >
        <motion.div
          variants={ SLIDE_LEFT_WITH_FADE.variants }
          initial="initial"
          animate="enter"
          exit="exit"
          transition={ SLIDE_LEFT_WITH_FADE.options }
        >
          <VideoPlayer videoId="IPGtQlyBW-U" cover={ getImage(data.cover.childImageSharp) }  label="Trailer cover: NFT car" />
        </motion.div>
      </ParallaxLayer>

      <motion.div className={ styles.content }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ SLIDE_BOTTOM_WITH_FADE.options }
      >
        <ParallaxLayer force={ 15 } depth={ 75 }>
          <Heading type="h2" align="left">
            UNPARALLELED UTILITY
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer force={ 15 } depth={ 50 }>
          <motion.ul className={ styles.list }
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <li>1 of 1 uniquely generated collectable artwork</li>
            <li>Individual traits airdropped as independent NFT items</li>
            <li>Early access to HELIX</li>
            <li>Fully playable character in HELIX</li>
            <li>Permanent play to earn bonus</li>
            <li>Prioritized land ownership</li>
          </motion.ul>
        </ParallaxLayer>
      </motion.div>

      <ParallaxCard
        className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./trailer.jpg"
          alt="Man in front of a car"
        />
      </ParallaxCard>
    </Container>
  );
}

export default TrailerSection;