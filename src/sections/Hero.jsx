import React from 'react';
import Form from '../Components/Form';


const Hero = ()=>{

    return (
        <section className='min-h-screen'>
            <div className='flex max-sm:flex-col justify-between items-center'>
                <div className='flex flex-col justify-start items-start gap-4 sm:w-[70%] w-full'>
                    <h1 className='text-4xl text-slate-700 font-bold font-montserrat'>Bienvenido al Garage Sale Club</h1>
                    <h3 className='text-2xl text-slate-500 font-bold font-palanquin'>Proporciónanos algunos datos para poder contactarte en el futuro e informarte sobre futuras ediciones</h3>
                </div>
                
                <Form />
            </div>
        </section>
    )
};

export default Hero;