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

import hypersonicLaboratoriesLogo from './hypersonic.png';
import mardonpolGamesLogo from './mardonpol.png';
import thirdKindVentureCapitalLogo from './thirdkind.png';

const PARTNERS = [
  {
    link: 'https://hypersoniclaboratories.com/',
    label: 'Hypersonic Laboratories',
    url: hypersonicLaboratoriesLogo
  },
  {
    link: 'https://hypersoniclaboratories.com/',
    label: 'Mardonpol Games',
    url: mardonpolGamesLogo
  },
  {
    link: 'https://www.crunchbase.com/organization/high-line-venture-partners',
    label: 'Third Kind Venture Capital',
    url: thirdKindVentureCapitalLogo
  }
];

function TeamSection({
  id,
}: SectionProps) {
  const renderPartners = () => PARTNERS.map(({ link, label, url }) => (
    <motion.div
      variants={ SLIDE_BOTTOM_WITH_FADE.variants }
      key={ label }
      className={ styles.partner }
      transition={ SLIDE_BOTTOM_WITH_FADE.options }
    >
      <a href={ link } target='_blank'><img src={ url } alt={ label } /></a>
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
            Team & Investors
          </Heading>
        </ParallaxLayer>

        <div className={ styles.content }>
          <ParallaxLayer force={ 15 } depth={ 50 }>
            <Paragraph marginTop="24">
            Based in LA and all around the world, our core team consists of passionate developers and artists with 50+ years of combined experience creating AAA quality games and products.
            </Paragraph>
            <Paragraph marginBottom="24">
            We’re currently hiring. Come help us bring the future faster.
            </Paragraph>

            <motion.div
              variants={ SLIDE_BOTTOM_WITH_FADE.variants }
              transition={ SLIDE_BOTTOM_WITH_FADE.options }
            >
              <Button href="https://rose-taxi-801.notion.site/HELIX-Open-Positions-7a03a9376f1747b399a0990714b322ba" target="_blank">
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
