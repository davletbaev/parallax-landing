import React from 'react';

import { useScrollJack } from '@components/ScrollJack/withScrollJack';

import * as styles from './Navigation.module.scss';

import { NavItem } from '@shared/types/components';

type NavigationProps = {
  items: NavItem[]
}

function Navigation({ items }: NavigationProps) {
  const { currentSectionId } = useScrollJack();

  const renderNav = () => items.map(({ path, label, target }) => (
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