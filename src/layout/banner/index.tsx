import { useEffect, useRef } from 'react';
import { Button } from '../../components/button';

export default function Banner() {
  const ringImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    addEventListener('mousemove', (event) => {
      let x = (event.clientX * 5) / 250;
      let y = (event.clientY * 5) / 250;

      ringImageRef.current &&
        (ringImageRef.current.style.transform =
          'translateX(' + x + 'px) translateY(' + y + 'px)');
    });
  }, []);

  return (
    <div className="bg-cover flex px-8 items-center justify-center object-contain h-screen w-full md:gap-64">
      <div className="flex justify-center md:justify-center text-center md:text-start flex-col ">
        <h2 className="leading-tight">Tolkien Universe</h2>
        <h1 className="bg-clip-text bg-gradient-to-l text-transparent from-lor-300 via-lor-400 to-lor-500 leading-tight">
          Artifacts
        </h1>
        <span className="mt-6 md:w-[420px]">
          A place to learn more about artifacts founded in the Tolkien universe.
          We will introduce you in this magical adventure through the powerful,
          lovely and beautiful artifacts writed by Tolkien.
        </span>
      </div>

      <div className="hidden lg:block">
        <img
          ref={ringImageRef}
          alt="one-ring"
          width="280px"
          src="/assets/images/one-ring.png"
        />
      </div>
    </div>
  );
}
