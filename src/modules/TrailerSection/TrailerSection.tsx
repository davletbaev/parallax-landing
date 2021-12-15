import React from 'react';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';

import * as styles from './TrailerSection.module.scss';

import cover from '@assets/images/cover.jpg';

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
        <VideoPlayer videoId="RYdCuw7L1qk" cover={ cover } />
      </motion.div>
      <motion.div className={ styles.content }
        variants={ {} }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ SLIDE_BOTTOM_WITH_FADE.options }
      >
              <div name="layers"
    data-force={15} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        <Heading type="h2" align="left">
          HELIX
        </Heading>
        </div>

        <div name="layers"
    data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>

        <Paragraph marginTop="24">
          Hyper Expansive Lifelike Interoperable eXperience — is a massively multiplayer game built on the concepts of a persistent open world and true digital ownership.
        </Paragraph>
        <Paragraph>
          Immerse yourself in Parallel City, a meticulously detailed reimagination of New York where you can explore freely, meet new friends, play games, and earn money.
        </Paragraph>
        <Paragraph>
          Every item can be bought, sold, or exchanged for real money.
        </Paragraph>

</div>

      </motion.div>
    </Container>
  );
}

export default TrailerSection;