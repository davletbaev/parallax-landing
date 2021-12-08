import React from 'react';
import classnames from 'classnames/bind';

import Icon from '@components/Icon';

import { ExternalUrl } from '@shared/constants';

import * as styles from './Socials.module.scss';

const cn = classnames.bind(styles);

type SocialsProps = {
  transparent?: boolean
}

const SOCIALS = [
  {
    id: 'discord',
    label: 'Discord',
    url: ExternalUrl.discord
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: ExternalUrl.twitter
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: ExternalUrl.youtube
  },
  {
    id: 'mail',
    label: 'Email',
    url: '#'
  }
];

function Socials({ transparent }: SocialsProps) {
  const socialsClasses = cn(
    'socials',
    { 'transparent': transparent }
  );

  const renderSocials = () => SOCIALS.map(({ id, label, url }) => (
    <li className={ styles.item } key={ id }>
      <a 
        className={ styles.link }
        href={ url }
        target="_blank"
        rel="noreferrer nofollow"
      >
        <Icon icon={ id } />
        <span className="visually-hidden">{ label }</span>
      </a>
    </li>
  ));

  return (
    <ul className={ socialsClasses }>
      { renderSocials() }
    </ul>
  );
}

export default Socials;