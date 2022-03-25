import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Accordion from '@components/Accordion';
import Button from '@components/Button';
import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { ExternalUrl } from '@shared/constants';
import { useMedia } from '@shared/hocs/withMedia';
import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './FaqSection.module.scss';

import { FaqQuestion } from '@shared/types/components';
import { SectionProps } from '@shared/types/modules';

type FAQSectionProps = SectionProps & {
  questions: FaqQuestion[]
}

function FaqSection({
  id,
  questions
}: FAQSectionProps) {
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
        <ParallaxLayer force={ 15 } depth={ 50 } className={ styles.heading }>
          <Heading type="h2">
            FREQUENTLY ASKED QUESTIONS
          </Heading>
        </ParallaxLayer>

        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 100 }>
            <Paragraph marginTop="24" marginBottom="24">
              We’ve answered our most asked questions here. Read our whitepaper/wiki for more details and message us on Discord if you have more questions.
            </Paragraph>
          </ParallaxLayer>

          <ParallaxLayer
            force={ 15 }
            depth={ 150 }
          >
            <motion.div
              variants={ SLIDE_BOTTOM_WITH_FADE.variants }
              transition={ SLIDE_BOTTOM_WITH_FADE.options }
            >
              <Button href={ ExternalUrl.wiki } target="_blank">
                VISIT DOCS
              </Button>
            </motion.div>
          </ParallaxLayer>
        </div>

        {
          isTabletOrBigger && (
            <ParallaxLayer
              force={ 15 }
              depth={ 200 }
              className={ styles.questions }
              variants={ FADE.variants }
              transition={ FADE.options }
            >
              <Accordion items={ questions } />
            </ParallaxLayer>
          )
        }
      </motion.div>

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
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default FaqSection;
