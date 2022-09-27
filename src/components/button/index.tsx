import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  Icon?: ReactNode;
  classes?: string;
}

export function Button({ Icon, children, classes, ...props }: IButtonProps) {
  return (
    <button
      {...props}
      className={`${classes} text-center justify-center bg-lor-200 text-white p-2 px-6 rounded flex`}
    >
      {children}
    </button>
  );
}
