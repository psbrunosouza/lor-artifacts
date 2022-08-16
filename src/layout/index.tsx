import {ReactNode} from "react";
import Footer from "./footer";
import Header from "./header";
import Banner from "./banner";

interface ILayout{
    children?: ReactNode
}

export default function Layout({children}: ILayout){
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            {children}
            <Footer></Footer>
        </>
    )
}