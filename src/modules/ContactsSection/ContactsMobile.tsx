import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '@components/Container';
import Socials from '@components/Socials';
import SubscriptionForm from '@components/SubscriptionForm';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './ContactsSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function ContactsMobile({ 
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
          <Heading type="h3" className={ styles.heading } align="center">
            JOIN THE COMMUNITY
          </Heading>
        
          <Paragraph className={ styles.paragraph } align="center">
            Join our community for game development updates, announcements, and more.
          </Paragraph>

          <motion.div 
            className={ styles.socials }
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <Socials />
          </motion.div>
        </motion.div>
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
          src="./contacts.jpeg"
          alt=""
        />
      </motion.div>
    </Container>
  );
}

export default ContactsMobile;