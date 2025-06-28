import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) => {
  return (
    <button 
      className={`button ${variant === 'primary' ? 'button--primary' : 'button--secondary'} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
