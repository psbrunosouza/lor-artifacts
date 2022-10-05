import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-lor-100 h-[64px] w-full flex text-center justify-center items-center">
      <div className="flex flex-col md:flex-row text-center justify-center items-center w-[90%]">
        <span>© 2022 - 2022 / Tolkien Universe</span>&nbsp;/&nbsp;
        <Link passHref href="#">
          <a className="text-gray-400 hover:text-gray-300">References</a>
        </Link>
      </div>
    </footer>
  );
}
