import React from 'react';
import { motion } from 'framer-motion';

import Accordion from '@components/Accordion';
import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './FaqSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

const QUESTIONS = [
  {
    heading: 'What is HELIX?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'When can I play?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'What platforms or consoles will HELIX be available on?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'Will there be VR support?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'What is HELIX?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'When can I play?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'What platforms or consoles will HELIX be available on?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'Will there be VR support?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
];

function FaqSection({ 
  id
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
        <Heading type="h2" className={ styles.heading }>
        FREQUENTLY ASKED QUESTIONS
        </Heading>
          
        <div className={ styles.content }>
          <Paragraph marginTop="24" marginBottom="24">
          We’ve answered our most asked questions here. Read our whitepaper/wiki for more details and message us on Discord if you have more questions.
          </Paragraph>

          <motion.div
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <Button href="#">
          VISIT WHITEPAPER / WIKI
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className={ styles.questions }
          variants={ FADE.variants }
          transition={ FADE.options }
        >
          <Accordion items={ QUESTIONS } />
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default FaqSection;