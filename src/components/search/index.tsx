import { InputHTMLAttributes, ReactNode } from 'react';
import { Search } from 'react-feather';

interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

export function SearchComponent({ children, ...props }: ISearchProps) {
  return (
    <div className="w-[200px] md:w-[280px] h-[42px] px-[18px] border border-lor-600 rounded-[12px] flex items-center justify-between">
      <input
        {...props}
        className="w-full h-full bg-transparent border-none shadow-none outline-none"
      />
      <Search />
    </div>
  );
}
