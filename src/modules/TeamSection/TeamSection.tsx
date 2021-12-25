import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';
import Container from '@components/Container';
import { ParallaxCard, ParallaxLayer } from '@components/Parallax';
import { Heading, Paragraph } from '@components/Typography';

import { FADE, SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './TeamSection.module.scss';

import { SectionProps } from '@shared/types/modules';

import hypersonicLaboratoriesLogo from './hypersonic-laboratories.svg';
import mardonpolGamesLogo from './mardonpol-games.svg';
import thirdKindVentureCapitalLogo from './third-kind-venture-capital.svg';

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
        <ParallaxLayer force={ 15 } depth={ 150 } className={ styles.heading }>
          <Heading type="h2">
            Team & Partners
          </Heading>
        </ParallaxLayer>
          
        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 50 }>
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
          </ParallaxLayer>
        </div>

        <ParallaxLayer 
          force={ 15 }
          depth={ 150 }
          className={ styles.partners }
        >
          { renderPartners() }
        </ParallaxLayer>
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
          src="./team.jpeg"
          alt=""
        />
      </ParallaxCard>
    </Container>
  );
}

export default TeamSection;