import React from 'react'

const Intro = () => {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Arif Al Monsor Tonoy</h1>

      <h1 className='text-5xl sm:text-2xl text-white font-semibold' >Competitive Programmer and also build things for the web.</h1>

      <p className='text-white w-2/3' >I am a fullstack web developer. Currently, I am developing my own projects & building new ones to start a good career. As a programmer, I also solve problems in online sites.</p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded' >Get Started</button>
    </div> 
  )
}

export default Intro
