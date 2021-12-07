import React from 'react';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import * as styles from './TrailerSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE, SLIDE_LEFT_WITH_FADE } from '@shared/transitions';

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
        <VideoPlayer videoId="RYdCuw7L1qk" />
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
    </Container>
  );
}

export default TrailerSection;