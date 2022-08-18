import {useEffect, useRef} from "react";
import {Button} from "../../components/button";
import { ChevronsRight } from 'react-feather';

export default function Banner() {
    const ringImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        addEventListener('mousemove', (event) => {
            let x = event.clientX * 2 / 250;
            let y = event.clientY * 2 / 250;

            ringImageRef.current && (ringImageRef.current.style.transform = "translateX(" + x + "px) translateY(" + y + "px)");
        })
    }, [])

    return (
        <div className="bg-cover flex px-8 items-center justify-center object-contain h-screen w-full md:gap-64">
            <div className="flex justify-center md:justify-center text-center md:text-start flex-col ">
                <h2>Tolkien Universe</h2>
                <h1 className="bg-clip-text bg-gradient-to-l text-transparent from-lordarken-300 via-lordarken-400 to-lordarken-500">Artifacts</h1>
                <span className="mt-6 md:w-[420px]">
                    a place to learn more about artifacts founded in the Tolkien universe.
                    We will introduce you in this magical adventure through the powerful,
                    lovely and beautiful artifacts writed by Tolkien.
                </span>
                <div className="flex justify-center md:justify-start mt-6 w-full md:w-auto">
                    <Button classes="w-full md:w-auto">
                        <ChevronsRight></ChevronsRight>More
                    </Button>
                </div>
            </div>

            <div className="hidden md:block">
                <img ref={ringImageRef} alt="one-ring" width="280px" height="280px" src="/assets/images/one-ring.png" />
            </div>
        </div>
    )
}