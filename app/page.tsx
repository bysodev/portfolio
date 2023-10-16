'use client'
import NavBar from '@/components/navegation/NabBar'
import { ThemeContext } from '@/utils/context/ThemeContext';
import { useRouter, usePathname } from 'next/navigation'
import {createRef, useContext, useEffect, useRef, useState} from 'react'
import Person from '@/public/img/person.jpeg'
import PersonRe from '@/public/img/person.png'
import { PHP, Js, Astro, Document, Node, Database } from "@react-symbols/icons"
import { BsLinkedin, BsFillEnvelopeAtFill, BsGithub, BsBootstrap, BsFiletypeSql } from "react-icons/bs";
import Link from 'next/link';
import { frontend } from '@/config/skills';
import ContentSkill from '@/components/containers/contentSkills';
export default function Home() {
  const router = useRouter();  
  const {theme, settheme} = useContext(ThemeContext);
  const [pathname, setPathname] = useState('inicio');

  useEffect(() => {
    // Obtener los rectángulos de los elementos
    let sections = document.querySelectorAll('section')

    window.onscroll=()=>{
      sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id') || ''
        if( top > offset && top < offset + height ){
          router.push(`#${id}`, {scroll: false})
          setPathname(`${id}`);
        }
      })
    }
  }, []);
  
  return (
    <body className={`${theme} grid place-items-center w-full`}>
      <div className='grid place-items-center'>
        <div className='fixed w-11/12 xl:w-4/6 z-10 mt-36'>
          <NavBar theme={theme} settheme={settheme} pathname={pathname} />
        </div>
      </div>
      <section id='inicio' className={`w-full h-screen dark:bg-slate-950 grid grid-flow-col place-items-center`}>
        <div className='grid place-items-center w-full h-full'>
          <div className="grid grid-rows-3 grid-flow-col mt-32 w-11/12 xl:w-4/6">
            <div className="pt-4 col-span-3 md:row-span-2 md:col-span-2 md:rounded-tl-2xl">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent">Bryan Solórzano</h1>
              <hr /> <br />
              <p className="text-2xl md:text-3xl font-bold capitalize font-code text-black dark:text-white">Information Technology Engineer & FullStack developer</p>
              <br />
              <p className="sm:mb-4 text-gray-500 dark:text-gray-400 text-step-0">+1 año de experiencia en desarrollo web, aplicando buenas prácticas y metodologías ágiles para garantizar resultados eficientes y de calidad.</p>
            </div>
            <div className=" pt-4 pl-4 col-span-3 md:col-span-2 rounded-b-lg md:rounded-br-none md:rounded-bl-2xl">
              <ul className="flex gap-4 items-center">
                <Link href={'https://www.linkedin.com/in/bryan-sol%C3%B3rzano-59613422a'} target='_blank' className='dark:text-white hover:scale-110 transition-transform duration-100 ease-in-out' >
                  <BsLinkedin className='text-3xl'></BsLinkedin>
                </Link>
                <Link href={'https://mail.google.com/mail/u/0/#inbox'} target='_blank' className='dark:text-white hover:scale-110 transition-transform duration-100 ease-in-out' >
                  <BsFillEnvelopeAtFill className='text-3xl'></BsFillEnvelopeAtFill>
                </Link>
                <Link href={'https://github.com/bysodev'} target='_blank' className='dark:text-white hover:scale-110 transition-transform duration-100 ease-in-out' >
                  <BsGithub className='text-3xl'></BsGithub>
                </Link>
              </ul>
            </div>
            <div className="grid place-items-center row-span-1 col-span-3 md:col-span-2 md:row-span-3 bg-teal-900 order-first md:order-last shape">
              <div className='w-48 md:w-96'>
                {/* <Image className='rounded-full' src={PersonRe} alt='' width={400} height={400} /> */}
                <img
                  className="rounded-full"
                  src='https://vidcache.net:8161/static/cb5fde05f1ae385b5fe690856392b5d769d18bad/person-removebg-preview.png'
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section id='conoceme' className='w-full h-auto dark:bg-slate-950'>
        <div className='grid place-items-center w-full h-full'>
          <div className='flex flex-col md:flex-row justify-between w-11/12 xl:w-4/6'>
            <div className='grid place-items-center md:w-2/5'>
              <div className='mb-8'>
                <div className='max-w-xs text-3xl font-bold tracking-widest'>
                  <h5 className='dark:text-white'>CONOCEME</h5>
                  <br />
                  <hr />
                  <br />
                </div>
                
                <p className='dark:text-white'>A finales del 2019 comence una carrera buscando la Ingenieria en Tecnologías de la Información, 
                  en cada semestre seguí desarrollando destrezas y ampliando conocimientos en temas, como redes, gestión de proyectos, bases de datos, programación, inteligencia artificial, arquitectura de software, entre muchas cosas más. 
                </p>
                <br />
                <p className='font-mono font-semibold dark:text-gray-300'>
                  Mi objetivo siempre fue desarrollar proyectos que fueran un reto, es así como comence bootcams, cursos y en los ultimos niveles de mi carrera consegui un trabajo de medio tiempo como programador full stack.
                </p>
               
              </div>
              <div className=''>
                <div className='max-w-xs text-3xl font-bold tracking-widest'>
                  <h5 className='dark:text-white'>EXPERIENCIA</h5>
                  <br />
                  <hr />
                  <br />
                </div>
                <ol className="flex-1 relative border-l border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-s-sm mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                    </div>
                    <div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">01 octubre 2023</time>
                      <span className="text-sm text-gray-400 dark:text-gray-500"> - </span>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Actualmente</time>
                    </div>
                    <h3 className="text-step-0 font-semibold text-gray-900 dark:text-white">Full Stack Developer</h3>
                    <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">Desarrollo y mantenimiento de módulos en un software CRM y ERP dedicada a temas contable, sostenido por la empresa IDRX TECHNOLOGY S.A - Ecuador </p>
                    <ul className="flex flex-wrap items-center gap-3">
                    <li> <PHP width={35} height={35} /></li>
                    <li> <Js width={35} height={35} /></li>
                    <li> <Database width={35} height={35} /></li>
                    <li> <BsFiletypeSql style={{color: '#C70039', fontSize: '25px'}} /></li>
                    <li> <BsBootstrap style={{color: '#793FDF', fontSize: '25px'}} /></li>
                    
                    
                    </ul>
                  </li>
                 
                </ol>
              </div>
            </div>
            <div className='md:w-1/2'>
              <div className=''>
                <div className='max-w-xs text-3xl font-bold tracking-widest'>
                  <h5 className='dark:text-white'>SKILLS</h5>
                  <br />
                  <hr />
                  <br />
                </div>
                <div>
                  <ul className="mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2">
                    {
                        frontend.map( font => (
                            <ContentSkill icon={font.icon} nombre={font.nombre} color={font.color} key={font.nombre}/>
                        ) )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='proyectos' className='w-full h-screen dark:bg-slate-950 text-gray-100'>
        <div className='grid place-items-center '>
          <div className='flex flex-col md:flex-row justify-between w-11/12 xl:w-4/6'>
            <div className=''>
              <div className='max-w-xs text-3xl font-bold tracking-widest'>
                  <h5 className='dark:text-white'>PROYECTOS</h5>
                  <br />
                  <hr />
                  <br />
                </div>
              <div className='flex justify-between'>
                <span>Por el momento visitar el repositorio de </span>
                <Link href={'https://github.com/bysodev'} target='_blank' className='dark:text-white hover:scale-110 transition-transform duration-100 ease-in-out' >
                  <BsGithub className='text-3xl'></BsGithub>
                </Link>
              </div>
              
            </div>
          </div>
        </div>

      </section>
    
      <footer className='w-full dark:bg-slate-950'>
        <div className='grid place-items-center'>
          <div className='grid place-items-center m-16 w-11/12 dark:text-gray-100'>
            <h6>@Bryan Solórzano - 2023</h6>
          </div>
        </div>
      </footer>
    </body>

  
  )
}
