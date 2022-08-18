import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-[64px] w-full flex justify-center items-center px-16">
            <span className="mr-4">© 2022 - 2022 / Tolkien Universe</span> <Link href="#">Referências</Link>
        </footer>
    )
}