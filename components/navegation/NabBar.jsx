'use client';
import Link from "next/link";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const navi = [
    {
        name: 'inicio',
        href: '#inicio'
    },
    {
        name: 'conoceme',
        href: '#conoceme'
    },
    {
        name: 'proyectos',
        href: '#proyectos'
    }
]

export default function NavBar({theme, settheme, pathname}) {

    return(  
        <div className="bg-transparent backdrop-blur-sm rounded-lg p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between top-0 ease-in duration-300 left-0 ">
            <h1 className="uppercase font-semibold cursor-pointer text-xl dark:text-white">
                BYSODEV
            </h1>
           
            <nav className="flex items-center gap-4">
                {
                    navi.map((link) => {
                        const isActivev = pathname === link.name;
                        return (
                            <Link href={link.href} key={link.name} className={`${isActivev ? 'text-red-700 xl:py-1 xl:px-2 rounded-lg transition-colors' : 'dark:text-white xl:py-1 xl:px-2 rounded-lg transition-colors'}`}>
                                {link.name.toUpperCase() }
                            </Link>
                        )
                    })
                }
            </nav>
            <div className="dark:text-white">
                {
                    theme == 'light' ? <button onClick={() => settheme("dark")}><HiOutlineMoon/></button> : <button onClick={() => settheme("light")}><HiOutlineSun/></button>
                }
            </div>
        </div>
    )
}