import { ReactNode } from 'react';

interface IArtifactCardProps {
  type: string;
  status: 'special' | 'rare' | 'legend';
  power: number;
  title: string;
  children?: ReactNode;
}

export function ArtifactCard({
  status,
  type,
  power,
  title,
  children,
}: IArtifactCardProps) {
  function getColorByStats(): string {
    const colors = {
      rare: '#31E991',
      special: '#E931E1',
      legend: '#E9B531',
    };

    return colors[status];
  }

  return (
    <div
      style={{ borderColor: getColorByStats() }}
      className="h-[320px] w-[240px] flex relative bg-lor-100 rounded-[8px] border-2"
    >
      {children}
      <div
        style={{ borderColor: getColorByStats() }}
        className="h-[52px] flex items-center justify-center absolute bottom-[-25px] left-[-15px] w-[52px] bg-lor-100 rounded-[50%] border-2 "
      >
        <img src={type} width="24px" height="24px" alt={title} />
      </div>

      <div
        style={{
          borderColor: getColorByStats(),
          transform: 'translate(-50%, -50%)',
        }}
        className="h-[52px] flex justify-center items-center w-[60%] md:w-[50%] rounded-[8px] absolute bottom-[-50px] left-[50%] bg-lor-100 border-2"
      >
        <span
          style={{ color: getColorByStats() }}
          className="w-full text-center font-bold"
        >
          {title}
        </span>
      </div>

      <div
        style={{
          backgroundColor: getColorByStats(),
          borderColor: getColorByStats(),
        }}
        className="h-[52px] flex justify-center items-center absolute bottom-[-25px] right-[-15px] w-[52px] rounded-[50%] border-2"
      >
        <p className="font-bold text-lor-50">{power}</p>
      </div>
    </div>
  );
}
