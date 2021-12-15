import React from 'react';
import { motion } from 'framer-motion';

import Accordion from '@components/Accordion';
import Container from '@components/Container';

import { FAQ_QUESTIONS } from '@shared/constants';

import * as styles from './FaqSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import { FADE } from '@shared/transitions';

function FaqMobile({ 
  id
}: SectionProps) {
  return (
    <Container id={ id } as="section">
      <motion.div 
        className={ styles.section }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <Accordion items={ FAQ_QUESTIONS } />
      </motion.div>
    </Container>
  );
}

export default FaqMobile;