import React from 'react';

import { ExternalUrl } from '@shared/constants';
import { useScrollJack } from '@shared/hocs/withScrollJack';

import * as styles from './Navigation.module.scss';

const NAV_ITEMS = [
  {
    path: ExternalUrl.wiki,
    label: 'Whitepaper',
    target: '_blank'
  },
  {
    path: '#roadmap',
    label: 'Roadmap',
    target: null
  },
  {
    path: '#founders-nft',
    label: 'Founders NFT',
    target: null
  },
  {
    path: '#faq',
    label: 'FAQ',
    target: null
  }
];

function Navigation() {
  const { currentSectionId } = useScrollJack();

  const renderNav = () => NAV_ITEMS.map(({ path, label, target }) => (
    <li className={ styles.item } key={ path }>
      <a 
        className={ styles[`#${currentSectionId}` === path ? 'linkActive' : 'link'] }
        href={ path }
        target={ target || undefined }
      >
        { label }
      </a>
    </li>
  ));

  return (
    <nav className={ styles.nav }>
      <ul className={ styles.list }>
        { renderNav() }
      </ul>
    </nav>
  );
}

export default Navigation;