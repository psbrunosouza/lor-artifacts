import Link from "next/link";
import {useRouter} from "next/router";

interface IMenu {
    name: string;
    path: string;
}

export default function Header() {
    const router = useRouter();

    const menu: IMenu[] = [
        {
            name: 'Collection',
            path: '/collection'
        },
        {
            name: 'About',
            path: '/about'
        }
    ]

    async function handleGoToHomePage(): Promise<void> {
        await router.push('/')
    }

    return (
        <header className='backdrop-blur-sm bg-lordarken-50/30 fixed top-0 left-0 right-0 w-full flex z-40 justify-between p-5 pl-60 pr-60'>
           <div onClick={handleGoToHomePage} className="flex justify-center items-center gap-4 cursor-pointer">
               <img alt="logo" src="/assets/images/tolkien-logo.svg" width="68px" ></img>
               <div className="flex flex-col">
                   <h4 className="text-[18px] font-bold" >
                       Tolkien Universe
                   </h4>
                   <span className="text-[16px] text-slate-300" >
                Artifacts
            </span>
               </div>
           </div>

            <div className="flex gap-4 items-center">
                {
                    menu.map((item) => (
                        <Link key={item.name} href={item.path}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>
        </header>
    )
}