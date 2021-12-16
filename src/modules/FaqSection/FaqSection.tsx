import React from 'react';
import { motion } from 'framer-motion';

import Accordion from '@components/Accordion';
import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import { ExternalUrl, FAQ_QUESTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';

import * as styles from './FaqSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

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
        <Accordion items={ FAQ_QUESTIONS } />
      </div>
    </Container>
  );
}

export default FaqSection;