import React from 'react';
import classnames from 'classnames/bind';

import { Heading, Paragraph } from '@components/Typography';

import * as styles from './Roadmap.module.scss';

const cn = classnames.bind(styles);

const ROADMAP_ITEMS = [
  {
    id: 1,
    heading: 'Q4 2021',
    description: 'Game Announcement Founders NFT Collection',
    active: true
  },
  {
    id: 2,
    heading: null,
    description: 'Community Treasury Established',
    active: false
  },
  {
    id: 3,
    heading: null,
    description: 'Native Token Release Early Access Preview',
    active: false
  },
  {
    id: 4,
    heading: null,
    description: 'HELIX Market Release',
    active: false
  },
  {
    id: 5,
    heading: null,
    description: 'HELIX Market Release',
    active: false
  }
];

function Roadmap() {
  const renderItems = () => ROADMAP_ITEMS.map(({ id, heading, description, active }) => {
    const itemContentClassname = cn(
      'itemContent',
      { itemContentActive: active }
    );

    return (
      <li key={ id } className={ styles.item }>
        <div className={ itemContentClassname }>
          { heading && <Heading type="h3" size="h4" className={ styles.heading }>{ heading }</Heading>}
          <Paragraph>{ description}</Paragraph>
        </div>
      </li>
    );
  });

  return (
    <div className={ styles.roadmap }>
      <ul className={ styles.scale }>
        { renderItems() }
      </ul>
    </div>
  );
}

export default  Roadmap;