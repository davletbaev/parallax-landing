import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Accordion from '@components/Accordion';
import Container from '@components/Container';

import { FAQ_QUESTIONS } from '@shared/constants';
import { FADE } from '@shared/transitions';

import * as styles from './FaqSection.module.scss';

import { SectionProps } from '@shared/types/modules';

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

      <motion.div key="faq"
        className={ styles.background }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <StaticImage
          className={ styles.backgroundImage }
          src="./faq.jpeg"
          alt=""
        />
      </motion.div>
    </Container>
  );
}

export default FaqMobile;