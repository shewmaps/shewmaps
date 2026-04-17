import React from 'react';
import { Button } from './Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const ReadButton: React.FC<Props> = ({ label = 'Read', ...rest }) => {
  return (
    <Button variant="ghost" {...rest}>{label}</Button>
  );
};

export default ReadButton;
