import React from 'react';
import classnames from 'classnames/bind';

import Icon from '@components/Icon';

import { SOCIALS } from '@shared/constants';

import * as styles from './Socials.module.scss';

const cn = classnames.bind(styles);

type SocialsProps = {
  transparent?: boolean
}

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
    <ul className={ socialsClasses } name="layers" data-force={5} data-depth={-100} style={{perspective:"1800px",transformStyle:"preserve-3d",transition:"500ms ease-out"}}>
      { renderSocials() }
    </ul>
  );
}

export default Socials;