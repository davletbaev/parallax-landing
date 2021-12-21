import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import { FADE, SLIDE_BOTTOM_WITH_FADE, SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

import * as styles from './TrailerSection.module.scss';

import cover from '@assets/images/cover.jpg';

import { SectionProps } from '@shared/types/modules';

function TrailerSection({ 
  id, 
}: SectionProps) {
  return (
    <Container id={ id } as="section" className={ styles.section }>
      <motion.div className={ styles.video }
        variants={ SLIDE_LEFT_WITH_FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ SLIDE_LEFT_WITH_FADE.options }
      >
        <VideoPlayer videoId="RYdCuw7L1qk" cover={ cover } />
      </motion.div>
      <motion.div className={ styles.content }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ SLIDE_BOTTOM_WITH_FADE.options }
      >
        <Heading type="h2" align="left">
          MEET H.E.L.I.X.
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
      </motion.div>

      <motion.div className={ styles.background }
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
      </motion.div>
    </Container>
  );
}

export default TrailerSection;