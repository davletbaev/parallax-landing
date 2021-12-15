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
    <Container id={ id } as="section" className={ styles.section }   name="layers"
    data-force={20} data-depth={100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      <div className={ styles.content }>
        <Heading type="h3" className={ styles.heading } align="center"  name="layers"  data-force={5} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
          SUBSCRIBE ON UPDATES
        </Heading>
        

        <Paragraph className={ styles.paragraph } align="center" name="layers"
    data-force={5} data-depth={100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
          Subscribe your email to receive most recent news and updates
        </Paragraph>


        <div className={ styles.form } name="layers"  data-force={5} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
          <SubscriptionForm />
        </div>
        
      </div>

        <Heading type="h3" className={ styles.heading } align="center" name="layers"  data-force={5} data-depth={125}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
          JOIN THE COMMUNITY
        </Heading>
        
        <Paragraph className={ styles.paragraph } align="center" name="layers"  data-force={5} data-depth={100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
          Join our community for game development updates, announcements, and more.
        </Paragraph>

        <div className={ styles.socials } name="layers"  data-force={5} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
          <Socials />
        </div>
    </Container>
  );
}

export default ContactsSection;