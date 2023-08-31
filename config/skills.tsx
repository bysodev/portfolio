import { Js, Dts, Tailwind, Reactjs, Next  } from "@react-symbols/icons"
import { BiLogoHtml5, BiLogoCss3, BiLogoBootstrap } from "react-icons/bi";

export const frontend = [
    {
        icon: <BiLogoHtml5 style={{color: '#FD8D14', fontSize: '50px'}} />,
        nombre: 'HTML',
        color: 'FD8D14'
    },
    {
        icon: <BiLogoCss3 style={{color: '#337CCF', fontSize: '50px'}} />,
        nombre: 'CSS',
        color: '337CCF'
    },
    {
        icon: <Js width={50} height={50} />,
        nombre: 'JavaScript'
    },
    {
        icon: <Dts width={50} height={50} />,
        nombre: 'TypeScript'
    },
    {
        icon: <BiLogoBootstrap style={{color: '#793FDF', fontSize: '50px'}} />,
        nombre: 'Bootstrap',
        color: '793FDF'
    },
    {
        icon: <Tailwind width={50} height={50} />,
        nombre: 'TailwindCss'
    },
    {
        icon: <Reactjs width={50} height={50} />,
        nombre: 'React'
    },
    {
        icon: <Next width={50} height={50} />,
        nombre: 'NextJs'
    }

]