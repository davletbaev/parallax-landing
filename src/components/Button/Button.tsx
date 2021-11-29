import React, { MouseEventHandler } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'gatsby';

import * as styles from './Button.module.scss';

const cn = classnames.bind(styles);

type AsLinkProps = {
  to: string,
  href?: never,
  type?: never, 
  variant?: 'primary' | 'secondary' | 'ghost',
  block?: boolean,
  disabled?: boolean,
  target?: '_blank' | '_top' | '_parent',
  onClick?: MouseEventHandler<HTMLAnchorElement> | MouseEventHandler<HTMLButtonElement>,
  className?: string,
  children?: React.ReactNode,
}

type AsAnchorProps = {
  href: string,
  to?: never,
  type? : never,
  variant?: 'primary' | 'secondary' | 'ghost',
  block?: boolean,
  disabled?: boolean,
  target?: '_blank' | '_top' | '_parent',
  onClick?: MouseEventHandler<HTMLAnchorElement> | MouseEventHandler<HTMLButtonElement>,
  className?: string,
  children?: React.ReactNode,
}

type AsButtonProps = {
  to?: never,
  href?: never,
  type?: 'button' | 'submit' | 'reset',
  variant?: 'primary' | 'secondary' | 'ghost',
  block?: boolean,
  disabled?: boolean,
  target?: '_blank' | '_top' | '_parent',
  onClick?: MouseEventHandler<HTMLAnchorElement> | MouseEventHandler<HTMLButtonElement>,
  className?: string,
  children?: React.ReactNode,
}

type ButtonProps = AsLinkProps | AsAnchorProps | AsButtonProps;

const Button = ({
  to,
  href,
  type = 'button',
  variant = 'primary',
  block,
  target,
  disabled,
  onClick,
  children,
  className,
}: ButtonProps) => {
  const buttonClassName = cn(
    'button',
    variant,
    { 
      'disabled': disabled,
      'block': block
    },
    className
  );

  const svgBorderElement = (
    <svg viewBox="0 0 100 100" fill="none"  preserveAspectRatio="none">
      <rect 
        x="0"
        y="0"
        width="100"
        height="100"
        stroke="#fff"
        strokeWidth="12"
        vectorEffect="non-scaling-stroke"  />
    </svg>
  );

  switch (true) {
    case Boolean(to):
      return (
        <Link 
          to={ !disabled ? to || '' : '' }
          target={ target }
          className={ buttonClassName }
          onClick={
            !disabled
              ? onClick as MouseEventHandler<HTMLAnchorElement>
              : undefined 
          }
        >
          {variant === 'primary' && svgBorderElement}
          { children }
        </Link>
      );
    case Boolean(href):
      return (
        <a 
          href={ !disabled ? href : '' }
          target={ target }
          className={ buttonClassName }
          onClick={
            !disabled
              ? onClick as MouseEventHandler<HTMLAnchorElement>
              : undefined 
          }
        >
          
          {variant === 'primary' && svgBorderElement}
          { children }
        </a>
      );
    default:
      return (
        <button
          type={ type }
          className={ buttonClassName }
          onClick={ 
            !disabled
              ? onClick as MouseEventHandler<HTMLButtonElement>
              : undefined
          }
          disabled={ disabled }
        >
          {variant === 'primary' && svgBorderElement}
          { children }
        </button>
      );
  }
};

export default Button;
