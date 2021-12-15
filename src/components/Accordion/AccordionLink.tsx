import React from 'react';

import Icon from '@components/Icon';
import { Heading } from '@components/Typography';

import * as styles from './Accordion.module.scss';

type AccordionLinkProps = {
  heading: string;
  href: string;
}

function AccordionItem({ heading, href }: AccordionLinkProps) {
  return (
    <div className={ styles.container }>
      <a href={ href } className={ styles.headline } target="_blank" rel="noreferrer nofollow">
        <Heading type="h3" size="h5">{ heading }</Heading>

        <span className={ styles.icon }>
          <Icon icon="arrow-right" />
        </span>
      </a>
    </div>
  );
}

export default AccordionItem;