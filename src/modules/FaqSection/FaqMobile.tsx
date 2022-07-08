import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Accordion from '@components/Accordion';
import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';

import { FADE } from '@shared/transitions';

import * as styles from './FaqSection.module.scss';

import { FaqQuestion } from '@shared/types/components';
import { SectionProps } from '@shared/types/modules';

type FAQSectionProps = SectionProps & {
  questions: FaqQuestion[]
}

function FaqMobile({ 
  id,
  questions
}: FAQSectionProps) {
  return (
    <Container id={ id } as="section">
      <ParallaxLayer
        force={ 15 }
        depth={ 200 }
        className={ styles.section }
        variants={ FADE.variants }
        initial="initial"
        animate="enter"
        exit="exit"
        transition={ FADE.options }
      >
        <Accordion items={ questions } />
      </ParallaxLayer>

      <ParallaxCard 
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
          alt="Street view with subway"
        />
      </ParallaxCard>
    </Container>
  );
}

export default FaqMobile;