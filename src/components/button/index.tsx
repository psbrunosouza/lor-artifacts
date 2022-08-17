import {ButtonHTMLAttributes, ReactNode} from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    Icon?: ReactNode;
}

export function Button({ Icon, children, ...props}: IButton) {
    return (
        <div>
             <button {...props} className="bg-lordarken-200 text-white p-2 rounded flex">
                 {children}
             </button>
        </div>
    )
}