import React from 'react';
import { motion } from 'framer-motion';

import Container from '@components/Container';
import Socials from '@components/Socials';
import SubscriptionForm from '@components/SubscriptionForm';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './ContactsSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

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
          <Heading type="h3" className={ styles.heading } align="center">
            SUBSCRIBE ON UPDATES
          </Heading>
        
          <Paragraph className={ styles.paragraph } align="center">
            Subscribe your email to receive most recent news and updates
          </Paragraph>

          <motion.div 
            className={ styles.form } 
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <SubscriptionForm />
          </motion.div>
        </motion.div>

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
    </Container>
  );
}

export default ContactsSection;