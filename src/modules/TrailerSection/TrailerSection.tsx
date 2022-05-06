import React from 'react';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import { FADE, SLIDE_BOTTOM_WITH_FADE, SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

import * as styles from './TrailerSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function TrailerSection({
  id,
}: SectionProps) {
  const data = useStaticQuery(graphql`
    query TrailerCoverQuery {
      cover: file(relativePath: {eq: "cover-soon.jpeg"}) {
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
        <motion.div className="videoplayer"
          variants={ SLIDE_LEFT_WITH_FADE.variants }
          initial="initial"
          animate="enter"
          exit="exit"
          transition={ SLIDE_LEFT_WITH_FADE.options }
        >
          <VideoPlayer videoId="IPGtQlyBW-U" cover={ getImage(data.cover.childImageSharp) } />
        </motion.div>
      </ParallaxLayer>

      <motion.div className={ styles.content }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ SLIDE_BOTTOM_WITH_FADE.options }
      >
        <ParallaxLayer force={ 15 } depth={ 100 }>
          <Heading type="h2" align="left">
            ENTER H.E.L.I.X.
          </Heading>
        </ParallaxLayer>

        <ParallaxLayer force={ 15 } depth={ 50 }>
          <Paragraph marginTop="24">
          H.E.L.I.X. (Hyper Expansive Lifelike Interoperable eXperience) is a high-fidelity metaverse platform centered around the concept of true digital ownership and independent player economies.
          </Paragraph>
          <Paragraph>
          Immerse yourself in Parallel City, a meticulously detailed 1:1 scale recreation of New York City where you can explore freely, own land, meet new friends, play games, and earn money.
          </Paragraph>
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
          src="./trailer.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default TrailerSection;
