import {ButtonHTMLAttributes, ReactNode} from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    Icon?: ReactNode;
    classes?: string;
}

export function Button({ Icon, children, classes, ...props}: IButton) {
    return (
         <button {...props} className={`${classes} text-center justify-center bg-lordarken-200 text-white p-2 rounded flex`}>
             {children}
         </button>
    )
}