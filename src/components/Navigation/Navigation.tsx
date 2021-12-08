import React from 'react';

import { ExternalUrl } from '@shared/constants';
import { useSections } from '@shared/hocs/withSections';

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
  const { currentSection } = useSections();

  const renderNav = () => NAV_ITEMS.map(({ path, label, target }) => (
    <li className={ styles.item } key={ path }>
      <a 
        className={ styles[`#${currentSection}` === path ? 'linkActive' : 'link'] }
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