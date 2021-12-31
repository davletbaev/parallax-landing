import React from 'react';
import classnames from 'classnames/bind';
import { motion } from 'framer-motion';

import { Heading, Paragraph } from '@components/Typography';

import { SLIDE_BOTTOM_WITH_FADE } from '@shared/transitions';

import * as styles from './Roadmap.module.scss';

const cn = classnames.bind(styles);

const ROADMAP_ITEMS = [
  {
    id: 1,
    heading: 'Q4 2021',
    items: [ 'Announcement + Trailer', 'Founders NFT Collection' ],
    active: true
  },
  {
    id: 2,
    heading: 'Q2 2022',
    items: [ 'Native Token Release', 'Land Sale' ],
    active: false
  },
  {
    id: 3,
    heading: 'Q3 2022',
    items: [ 'HELIX Market Release', 'Early Access' ],
    active: false
  },
  {
    id: 4,
    heading: 'HELIX Market Release',
    description: null,
    active: false
  }
];

function Roadmap() {
  const renderItems = () => ROADMAP_ITEMS.map(({ id, heading, description, items, active }) => {
    const itemContentClassname = cn(
      'itemContent',
      { itemContentActive: active }
    );

    return (
      <li key={ id } className={ styles.item }>
        <div className={ itemContentClassname }>
          { heading && <Heading type="h3" size="h4" className={ styles.heading }>{ heading }</Heading>}
          { description && <Paragraph>{ description }</Paragraph>}
          {
            items && (
              <ul className={ styles.itemList }>
                {
                  items?.map((item, index) => (
                    <motion.li 
                      variants={ SLIDE_BOTTOM_WITH_FADE.variants }
                      key={ index }
                      className={ styles.itemListItem }
                      transition={ SLIDE_BOTTOM_WITH_FADE.options }
                    >
                      {item}
                    </motion.li>
                  ))
                }
              </ul>)
          }
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