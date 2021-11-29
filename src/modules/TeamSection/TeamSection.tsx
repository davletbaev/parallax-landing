import React from 'react';

import Button from '@components/Button';
import Container from '@components/Container';
import { Heading, Paragraph } from '@components/Typography';

import * as styles from './TeamSection.module.scss';

import hypersonicLaboratoriesLogo from './hypersonic-laboratories.svg';
import mardonpolGamesLogo from './mardonpol-games.svg';
import thirdKindVentureCapitalLogo from './third-kind-venture-capital.svg';

type TeamSectionProps = {
  scrollHeight: number,
}

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
  scrollHeight,
}: TeamSectionProps) {
  const renderPartners = () => PARTNERS.map(({ label, url }) => (
    <div key={ label } className={ styles.partner }>
      <img src={ url } alt={ label } />
    </div>
  ));

  return (
    <div style={ { height: `${scrollHeight}px` } } className={ styles.wrapper }>
      <Container as="section" className={ styles.section }>
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

          <Button href="#">
            SEE OPEN POSITIONS
          </Button>
        </div>

        <div className={ styles.partners }>
          { renderPartners() }
        </div>
      </Container>
    </div>
  );
}

export default TeamSection;