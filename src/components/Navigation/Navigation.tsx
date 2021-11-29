import React from 'react';

import * as styles from './Navigation.module.scss';

const NAV_ITEMS = [
  {
    path: '#',
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
  const renderNav = () => NAV_ITEMS.map(({ path, label, target }) => (
    <li className={ styles.item } key={ path }>
      <a 
        className={ styles.link }
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