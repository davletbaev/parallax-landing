import React from 'react';

import Accordion from '@components/Accordion';
import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './FaqSection.module.scss';

import { SectionProps } from '@shared/types/modules';

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
    <Container id={ id } as="section" className={ styles.section }>

      <Heading type="h2" className={ styles.heading } name="layers"  data-force={15} data-depth={50}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        FREQUENTLY ASKED QUESTIONS
      </Heading>
 
          
          
      <div className={ styles.content }>
      <div name="layers"
    data-force={15} data-depth={100}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        <Paragraph marginTop="24" marginBottom="24">
          We’ve answered our most asked questions here. Read our whitepaper/wiki for more details and message us on Discord if you have more questions.
        </Paragraph>
</div>

<div name="layers"
    data-force={15} data-depth={150}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        <Button href="#">
          VISIT WHITEPAPER / WIKI
        </Button>
        </div>
      </div>

      <div className={ styles.questions } name="layers"
    data-force={15} data-depth={200}
    style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
        <Accordion items={ QUESTIONS } />
      </div>
    </Container>
  );
}

export default FaqSection;