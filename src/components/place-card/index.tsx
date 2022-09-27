import { ReactNode } from 'react';

interface IPlaceCardProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

export function PlaceCard({ title, children }: IPlaceCardProps) {
  return (
    <div className="h-[320px] w-[240px] flex relative border-lor-600 bg-lor-100 rounded-[8px] border-2">
      {children}

      <div
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        className=" text-ellipsis h-[52px] flex justify-center items-center w-[70%] border-lor-600 rounded-[8px] absolute bottom-[-50px] left-[50%] bg-lor-100 border-2"
      >
        <span className="w-full text-[12px] text-ellipsis text-center font-bold">
          {title}
        </span>
      </div>
    </div>
  );
}
