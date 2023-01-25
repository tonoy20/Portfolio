import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "Javascript",
        "Python",
        "React",
        "Node",
        "Express",
        "MongoDB",
    ]

  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex w-full sm:flex-col' >
        <div className='h-[70vh] w-1/2 sm:w-full'>
        <lottie-player 
            src="https://assets2.lottiefiles.com/private_files/lf30_WdTEui.json"  
            background="transparent"  
            speed="1"   
            autoplay
        ></lottie-player>
        </div>
        <div className='flex flex-col gap 5 w-1/2 sm:w-full'>
            <p className='text-white py-7'>
                Hello! my name is Arif Al Monsor Tonoy. I enjoy creating things that live on the internat. My interest in web development started in 2021 when I decided to try editing custom Tubler themes.I have also given my time on problem solving in Codeforces and other online sites.
            </p>
            <p className='text-white'>
                Fast forward to today, and I had been working & creating projects of my own. I have also learned many programming languages like PHP, Python that helped me to work at the backend of projects.
            </p>
        </div>
      </div >
      <div className='py-5'>
        <h1 className='text-tertiary text-2xl'>Here are a few technologies I've been working with recently:</h1>
        <div className='flex flex-wrap gap-10 mt-5' >
            {skills.map((skill, index) => (
            <div className='border border-tertiary py-3 px-10'>
                <h1 className='text-tertiary'>{skill}</h1>
            </div>
        ))}
        </div>
        
      </div>
    </div>
  );
}

export default About
