import Link from 'next/link';
import { Menu } from 'react-feather';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IMenu {
  name: string;
  path: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menu: IMenu[] = [
    {
      name: 'Collection',
      path: '/collection',
    },
  ];

  async function handleGoToHomePage(): Promise<void> {
    await router.push('/');
  }

  function handleMenu(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="backdrop-blur-sm bg-lor-50/30 fixed top-0 left-0 right-0 w-full flex z-40 py-4 justify-center items-center relative">
      <div className="flex justify-between items-center w-[95%] lg:w-2/3">
        <div
          onClick={handleGoToHomePage}
          className="flex justify-center items-center gap-4 cursor-pointer"
        >
          <img
            alt="logo"
            src="/assets/images/tolkien-logo.svg"
            width="48px md:68px"
          ></img>
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold">Tolkien Universe</h4>
            <span className="text-[16px] text-slate-300">Artifacts</span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          {menu.map((item) => (
            <div
              className={
                router.pathname === item.path ? 'border-b-2 border-dashed' : ''
              }
              key={item.name}
            >
              <Link href={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={handleMenu}>
            <Menu></Menu>
          </button>
        </div>
      </div>

      <div
        className="absolute w-[90%] p-8 overflow-auto h-[240px] rounded-[12px] border bg-lor-100 border-lor-600 top-[102px]"
        hidden={!isMenuOpen}
      >
        <ul>
          {menu.map((item) => (
            <li
              onClick={handleMenu}
              className={
                router.pathname === item.path
                  ? 'flex justify-center items-center text-center text-[18px] bg-lor-600 hover:bg-lor-600/80 rounded-[12px] py-1 '
                  : 'flex justify-center items-center text-center text-[18px] rounded-[12px] py-1 hover:bg-lor-600'
              }
              key={item.name}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
