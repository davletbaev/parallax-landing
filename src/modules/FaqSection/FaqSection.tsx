import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Accordion from '@components/Accordion';
import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import { ExternalUrl, FAQ_QUESTIONS } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './FaqSection.module.scss';

import { SectionProps } from '@shared/types/modules';

function FaqSection({ 
  id
}: SectionProps) {
  const { isTabletOrBigger } = useMedia();
  
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
            <Button href={ ExternalUrl.wiki } target="_blank">
              VISIT WHITEPAPER / WIKI
            </Button>
          </motion.div>
        </div>

        {
          isTabletOrBigger && (
            <motion.div 
              className={ styles.questions }
              variants={ FADE.variants }
              transition={ FADE.options }
            >
              <Accordion items={ FAQ_QUESTIONS } />
            </motion.div>
          )
        }
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

export default FaqSection;