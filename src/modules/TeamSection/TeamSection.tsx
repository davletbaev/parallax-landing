import React from 'react';
import { motion } from 'framer-motion';

import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './TeamSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import hypersonicLaboratoriesLogo from './hypersonic-laboratories.svg';
import mardonpolGamesLogo from './mardonpol-games.svg';
import thirdKindVentureCapitalLogo from './third-kind-venture-capital.svg';
import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

const PARTNERS = [
  {
    label: 'Hypersonic Laboratories',
    url: hypersonicLaboratoriesLogo
  },
  {
    label: 'Mardonpol Games',
    url: mardonpolGamesLogo
  },
  {
    label: 'Third Kind Venture Capital',
    url: thirdKindVentureCapitalLogo
  }
];

function TeamSection({ 
  id,
}: SectionProps) {
  const renderPartners = () => PARTNERS.map(({ label, url }) => (
    <motion.div 
      variants={ SLIDE_BOTTOM_WITH_FADE.variants }
      key={ label }
      className={ styles.partner }
      transition={ SLIDE_BOTTOM_WITH_FADE.options }
    >
      <img src={ url } alt={ label } />
    </motion.div>
  ));

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
          Team & Partners
        </Heading>
          
        <div className={ styles.content }>
          <Paragraph marginTop="24">
            Based in LA and all around the world, our team consists of passionate developers and artists who have worked on various AAA studio titles.
          </Paragraph>
          <Paragraph marginBottom="24">
            We’re currently hiring. Come help us bring the future faster.
          </Paragraph>

          <motion.div
            variants={ SLIDE_BOTTOM_WITH_FADE.variants }
            transition={ SLIDE_BOTTOM_WITH_FADE.options }
          >
            <Button href="#">
              SEE OPEN POSITIONS
            </Button>
          </motion.div>
        </div>

        <div className={ styles.partners }>
          { renderPartners() }
        </div>
      </motion.div>
    </Container>
  );
}

export default TeamSection;