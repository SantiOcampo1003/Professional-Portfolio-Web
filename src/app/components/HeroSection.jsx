"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-gray-500'>
                            Hola,soy{""}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Santiago Ocampo',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Software developer',
                                1000,
                                'Backend  Developer',
                                1000,
                                'Frontend  Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Soy un Desarrollador de Software con un año de experiencia como desarrollador
                        fullstack en startups colombianas, mi enfoque se ha centrado en proyectos basados en JavaScript, TypeScript, Node.js y Nest.js, complementados con un sólido conocimiento en bases de datos SQL y en el uso de ORM (Object-Relational Mapping)                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full  mr-4 lg:mt-0 bg-gradient-to-br from-blue-500 via-purple-500  to-gray-500   hover.bg-slate-200 text-white'>
                            Contratame
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-gray-500 hover:from-blue-700 hover:via-purple-700 hover:to-gray-700 text-white border mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Descargar CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:-mt-0">
                    <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="Hero image"
                            className='absolute inset-0 w-full h-full object-cover'
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroSection