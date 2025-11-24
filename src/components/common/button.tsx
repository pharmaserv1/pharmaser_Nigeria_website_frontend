'use client';
import React from 'react';

type ButtonProps = {
  btnText: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  btnType?: string;
  btnIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  btnText,
  className,
  onClick,
  disabled,
  btnType,
  btnIcon,
  type,
}: ButtonProps) => {
  return (
    <button
      className={`${
        btnType === 'secondary'
          ? `text-white  px-6 py-3 text-sm rounded-lg ${
              disabled ? 'cursor-not-allowed !bg-blue/80' : 'bg-blue'
            } transition-colors duration-300 flex items-center gap-2`
          : `text-blue  px-6 py-3 text-sm rounded-lg ${
              disabled ? 'cursor-not-allowed !bg-white/80' : 'bg-white'
            } transition-colors duration-300 flex items-center gap-2`
      } ${className}`}
      onClick={() => onClick?.()}
      disabled={disabled}
      type={type}
    >
      {btnText} {btnIcon && btnIcon}
    </button>
  );
};

export default Button;
