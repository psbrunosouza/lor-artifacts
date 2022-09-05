import { ReactNode } from 'react';

interface IPlaceCard {
  title: string;
  className?: string;
  children?: ReactNode;
}

export function PlaceCard({ title, children }: IPlaceCard) {
  return (
    <div className="h-[320px] w-[240px] flex relative bg-lor-100 rounded-[8px] border-2">
      {children}

      <div
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        className="h-[52px] flex justify-center items-center w-[70%] rounded-[8px] absolute bottom-[-50px] left-[50%] bg-lor-100 border-2"
      >
        <span className="w-full text-center font-bold">{title}</span>
      </div>
    </div>
  );
}
