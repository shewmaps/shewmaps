import React from 'react';
import './ui.css';

type Variant = 'primary' | 'ghost' | 'subtle';

type ButtonProps = {
  variant?: Variant;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Button: React.FC<ButtonProps> = ({ variant = 'ghost', children, className, href, target, rel, ...rest }) => {
  const cls = ['ui-button', `ui-button--${variant}`, className || ''].join(' ').trim();

  if (href) {
    return (
      <a className={cls} href={href} target={target} rel={rel} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
