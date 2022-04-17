import React from 'react';
import classnames, { Binding } from 'classnames/bind';
import { Link } from 'gatsby';

import * as styles from './Logo.module.scss';

const cn = classnames.bind(styles as unknown as Binding);

type LogoProps = {
  to?: string | null,
  large?: boolean,
  animate?: boolean
}

function Logo({ to = null, large, animate }: LogoProps) {
  const logoClasses = cn(
    'link',
    { large: large },
    { animate: animate }
  );

  const logo = (
    <svg
      className={ styles.logo }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 435 69"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m421.999 11.067-16.916.133-17.613 16.178-17.613-16.244L352.33 11l26.246 24.533-25.723 23.664h17.352l16.916-15.776c3.197 2.941 5.261 4.836 6.191 5.682 3.43 3.03 7.15 6.373 11.161 10.027h17.526L396.015 35.2l25.984-24.132ZM77.345 13.206v-2.072H64.353v18.985H27.992V11.134H15v47.93h12.992V40.079h36.274v18.985h12.991V35.132c.059-6.016.088-11.52.088-16.511v-5.415Zm144.967 5.415v-7.487H209.32V49.103h-.087v9.96h63.217v-9.96h-50.138V18.621Zm97.808-7.487v47.93h-12.992v-47.93h12.992ZM111.396 11h62.478v10.71h-62.478V11Zm-.002 37.487h62.478v10.71h-62.478v-10.71Zm62.478-17.851h-62.478v8.925h62.478v-8.925Z"
        fill="currentColor"
      />
    </svg>
  );

  if (to) {
    return (
      <Link
        to={ to }
        className={ logoClasses }
      >
        {logo}
      </Link>
    );
  }

  return (
    <div className={ logoClasses }>
      {logo}
    </div>
  );
}

export default Logo;