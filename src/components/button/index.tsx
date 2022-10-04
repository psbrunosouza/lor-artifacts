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
      className={`${classes} text-[18px] text-center justify-center bg-lor-200 text-white rounded-[12px] py-2 px-3 flex transition hover:bg-lor-200/80 ease-in delay-50`}
    >
      {children}
    </button>
  );
}
