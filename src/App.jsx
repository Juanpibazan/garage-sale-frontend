import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from './sections/Hero';
import ShirtCanvas from './sections/Shirt';
import DressCanvas from './Components/Dress';


function App() {


  return (
    <main className='relative min-h-screen bg-gradient-to-b from-[#f1bc15] to-[#b2b2b2]  flex flex-col justify-start items-center gap-5'>
      <section className='px-10 py-5'>
        <Hero/>

      </section>
      <section className='h-screen w-[80%] flex justify-center items-center gap-5'>
        <ShirtCanvas />
      </section>
    </main>
  )
}

export default App;
