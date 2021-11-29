import React from 'react';

import Container from '@components/Container';
import Socials from '@components/Socials';
import SubscriptionForm from '@components/SubscriptionForm';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './ContactsSection.module.scss';

type ContactsSectionProps = {
  scrollHeight: number,
}

function ContactsSection({ 
  scrollHeight,
}: ContactsSectionProps) {
  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <div className={ styles.content }>
          <Heading type="h3" className={ styles.heading } align="center">
            SUBSCRIBE ON UPDATES
          </Heading>
        
          <Paragraph className={ styles.paragraph } align="center">
            Subscribe your email to receive most recent news and updates
          </Paragraph>

          <div className={ styles.form }>
            <SubscriptionForm />
          </div>
        </div>

        <div className={ styles.content }>
          <Heading type="h3" className={ styles.heading } align="center">
            JOIN THE COMMUNITY
          </Heading>
        
          <Paragraph className={ styles.paragraph } align="center">
            Join our community for game development updates, announcements, and more.
          </Paragraph>

          <div className={ styles.socials }>
            <Socials />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactsSection;