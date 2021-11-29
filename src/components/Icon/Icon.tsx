import React from 'react';
import classnames from 'classnames/bind';

import * as styles from './Icon.module.scss';

const cn = classnames.bind(styles);

type IconProps = {
  icon: string,
  animate?: boolean
}

function Icon({ icon, animate }: IconProps) {
  const iconClasses = cn(
    'icon', 
    { 'animated': animate }
  );

  return (
    <svg key={ icon } className={ iconClasses }>
      <use href={ `/sprite.svg#${icon}` } />
    </svg>
  );
}

export default Icon;
