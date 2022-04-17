import React from 'react';
import classnames, { Binding } from 'classnames/bind';

import { useScrollJack } from '@components/ScrollJack/withScrollJack';

import * as styles from './Navigation.module.scss';

import { NavItem } from '@shared/types/components';

type NavigationProps = {
  items: NavItem[]
}

const cn = classnames.bind(styles as unknown as Binding);

function Navigation({ items }: NavigationProps) {
  const { currentSectionId } = useScrollJack();

  const renderNav = () => items.map(({ path, label, target, badge }) => (
    <li className={ styles.item } key={ path }>
      <a
        className={ cn('link', `#${currentSectionId}` === path && 'linkActive', badge && 'linkWithBadge') }
        href={ path }
        target={ target || undefined }
        data-badge={ badge }
      >
        {label}
      </a>
    </li>
  ));

  return (
    <nav className={ styles.nav }>
      <ul className={ styles.list }>
        {renderNav()}
      </ul>
    </nav>
  );
}

export default Navigation;