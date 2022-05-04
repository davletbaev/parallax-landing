import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import Socials from '@components/Socials';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './ContactsSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function ContactsSection({
  id,
}: SectionProps) {
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
        <motion.div
          className={ styles.content }
          variants={ SLIDE_BOTTOM_WITH_FADE.variants }
          transition={ SLIDE_BOTTOM_WITH_FADE.options }
        >
          <ParallaxLayer
            force={ 5 }
            depth={ 125 }
            className={ styles.heading }
          >
            <Heading type="h3" align="center">
                JOIN THE COMMUNITY
            </Heading>
          </ParallaxLayer>

          <ParallaxLayer
            force={ 5 }
            depth={ 100 }
            className={ styles.paragraph }
          >
            <Paragraph align="center">
                Join our community for game development updates, announcements, and more.
            </Paragraph>
          </ParallaxLayer>

          <ParallaxLayer
            force={ 5 }
            depth={ 50 }
            className={ styles.socials }
          >
            <motion.div
              variants={ SLIDE_BOTTOM_WITH_FADE.variants }
              transition={ SLIDE_BOTTOM_WITH_FADE.options }
            >
              <Socials/>
            </motion.div>
          </ParallaxLayer>
        </motion.div>
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
          src="./contacts.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default ContactsSection;