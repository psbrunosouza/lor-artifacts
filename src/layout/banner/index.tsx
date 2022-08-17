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
        <div className="bg-cover flex items-center justify-center gap-48 object-contain h-screen w-full">
            <div className="flex flex-col items-start">
                <h2>Tolkien Universe</h2>
                <h1 className="bg-clip-text bg-gradient-to-l text-transparent from-lordarken-300 via-lordarken-400 to-lordarken-500">Artifacts</h1>
                <span>
                    a place to learn more about artifacts founded in the Tolkien universe.
                </span>
                <span>
                    We will introduce you in this magical adventure through the powerful,
                </span>
                <span>
                    lovely and beautiful artifacts writed by Tolkien.
                </span>
                <div className="mt-2">
                    <Button><ChevronsRight></ChevronsRight>More</Button>
                </div>
            </div>

            <div>
                <img ref={ringImageRef} alt="one-ring" width="280px" height="280px" src="/assets/images/one-ring.png" />
            </div>
        </div>
    )
}