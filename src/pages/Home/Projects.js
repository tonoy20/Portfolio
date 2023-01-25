import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';
 
function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <div>
      <SectionTitle title = 'Projects' />
      <div className='flex py-10 gap-20 sm:flex-col' >
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5
                            ${selectedItemIndex === index 
                            ? `text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 ` 
                            : `text-white`}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                  <img 
                    src={projects[selectedItemIndex].image} 
                    alt="" 
                    className='h-50 w-100'
                  ></img>
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl'>
                        {projects[selectedItemIndex].title}
                    </h1>

                    <p className='text-white py-3 leading-6'>
                        {projects[selectedItemIndex].description}
                    </p>
                    
                </div>
            </div>
    </div>
  )
}

export default Projects
