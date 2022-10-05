interface IArtifactCardProps {
  type: string;
  status: string;
  power: number;
  title: string;
  image: string;
}

export function ArtifactCard({
  status,
  type,
  power,
  title,
  image,
}: IArtifactCardProps) {
  return (
    <div
      style={{ borderColor: status }}
      className="h-[320px] w-[240px] flex relative bg-lor-100 rounded-[12px] border-2 flex justify-center items-center"
    >
      {image ? (
        <img
          alt=""
          className="h-full w-full rounded-[12px] object-cover"
          src={image}
        />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img
            alt=""
            className="h-[80px] w-[80px] rounded-[12px] object-cover"
            src="/assets/icons/no-data-found.svg"
          />
          <span className="text-gray-400 leading-8">Image not found</span>
        </div>
      )}
      <div
        style={{ borderColor: status }}
        className="h-[52px] flex items-center justify-center absolute bottom-[-25px] left-[-15px] w-[52px] bg-lor-100 rounded-[50%] border-2 "
      >
        <img src={type} width="24px" height="24px" alt={title} />
      </div>

      <div
        style={{
          borderColor: status,
          transform: 'translate(-50%, -50%)',
        }}
        className="h-[52px] flex justify-center items-center w-[60%] md:w-[60%] lg:w-[60%] rounded-[12px] absolute bottom-[-50px] left-[50%] bg-lor-100 border-2"
      >
        <span
          style={{ color: status }}
          className="w-full text-center font-bold"
        >
          {title}
        </span>
      </div>

      <div
        style={{
          backgroundColor: status,
          borderColor: status,
        }}
        className="h-[52px] flex justify-center items-center absolute bottom-[-25px] right-[-15px] w-[52px] rounded-[50%] border-2"
      >
        <p className="font-bold text-lor-50">{power}</p>
      </div>
    </div>
  );
}
