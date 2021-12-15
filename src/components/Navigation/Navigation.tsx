import React, { MouseEventHandler } from 'react';

import { SECTIONS } from '@shared/constants';
import { useSections } from '@shared/hocs/withSections';

import * as styles from './Navigation.module.scss';

const NAV_ITEMS = [
  {
    path: '/whitepaper',
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

  const section = SECTIONS[currentSection].id;

  const handelNavClick = (path: string): MouseEventHandler<HTMLAnchorElement> => (e) => {
    if (path.startsWith('#')) {
      e.preventDefault();

      document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNav = () => NAV_ITEMS.map(({ path, label, target }) => (
    <li className={ styles.item } key={ path }>
      <a 
        className={ styles[`#${section}` === path ? 'linkActive' : 'link'] }
        href={ path }
        target={ target || undefined }
        onClick={ handelNavClick(path) }
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