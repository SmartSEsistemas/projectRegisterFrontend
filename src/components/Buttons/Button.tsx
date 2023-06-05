import React from 'react';
import { PrimaryButton } from './styles';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'lightGray'
    | 'dark'
    | 'light'
    | 'blue';
  styles?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      type = 'button',
      onClick,
      variant = 'primary',
      children,
      styles,
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <PrimaryButton
        style={styles}
        statusColor={variant}
        onClick={handleClick}
        type={type}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </PrimaryButton>
    );
  },
);

Button.displayName = 'Button';
