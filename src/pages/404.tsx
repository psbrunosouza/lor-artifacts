import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div className="text-center flex items-center justify-center h-screen w-screen">
      <div>
        <h1 className="text-[28px]">404 - Not all who wander are lost</h1>
      </div>

      <div className="mx-3">|</div>

      <div>
        <Link href="/">
          <a>
            Go back to <span className="text-lor-300 font-bold">valfenda</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
