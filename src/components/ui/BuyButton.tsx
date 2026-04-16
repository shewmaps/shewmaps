import React from 'react';
import './ui.css';
import Button from './Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  placeholder?: boolean;
  children?: React.ReactNode;
}

const BuyButton: React.FC<Props> = ({ href, placeholder = false, children = 'Buy', ...rest }) => {
  if (href) {
    return (
      <Button href={href} variant="primary" target="_blank" rel="noopener noreferrer" {...(rest as any)}>
        {children}
      </Button>
    );
  }

  if (placeholder) {
    return (
      <Button variant="primary" onClick={() => window.alert('Buy link coming soon')} aria-label="Buy placeholder" {...(rest as any)}>
        {children}
      </Button>
    );
  }

  return null;
};

export default BuyButton;
