import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'react-feather';

interface IMenu {
  name: string;
  path: string;
}

export default function Header() {
  const router = useRouter();

  const menu: IMenu[] = [
    {
      name: 'Collection',
      path: '/collection',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  async function handleGoToHomePage(): Promise<void> {
    await router.push('/');
  }

  return (
    <header className="backdrop-blur-sm bg-lor-50/30 fixed top-0 left-0 right-0 w-full flex z-40  py-4 justify-center items-center">
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
          <button>
            <Menu></Menu>
          </button>
        </div>
      </div>
    </header>
  );
}
