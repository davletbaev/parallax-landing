import React from 'react';

import Accordion from '@components/Accordion';
import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './FaqSection.module.scss';

type FaqSectionProps = {
  scrollHeight: number,
}

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
  scrollHeight,
}: FaqSectionProps) {
  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
        <Heading type="h2" className={ styles.heading }>
          FREQUENTLY ASKED QUESTIONS
        </Heading>
          
        <div className={ styles.content }>
          <Paragraph marginTop="24" marginBottom="24">
            We’ve answered our most asked questions here. Read our whitepaper/wiki for more details and message us on Discord if you have more questions.
          </Paragraph>

          <Button href="#">
            VISIT WHITEPAPER / WIKI
          </Button>
        </div>

        <div className={ styles.questions }>
          <Accordion items={ QUESTIONS } />
        </div>
      </Container>
    </div>
  );
}

export default FaqSection;