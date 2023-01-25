import React from 'react'
import SectionTitle from '../../components/SectionTitle'


function Contact() {
    const user = {
        Name : "Arif Al Monsor Tonoy",
        Age : 24,
        Gender : "Male",
        Email :  <a href="mailto:tonoyict20@gmail.com">tonoyict20@gmail.com</a>,
        Linkdn : <a href="https://www.linkedin.com/in/arif-tonoy-597b451a4/">Arif Tonoy</a>,
        Mobile : "+8801761718015",
        Country: "Bangladesh"
    }
  return (
    <div>
      <SectionTitle title = "Say Hello" />

      <div className='flex sm:flex-col items-center justify-between'>
        <div className='flex flex-col gap-3'>
        <h1 className='text-tertiary'>{'{'}</h1>
        {Object.keys(user).map((key) => (
            <h1 className='ml-5 '>
              
                <span className='text-tertiary'>{key}  :  {user[key]}</span>
              
            </h1>
        ) )}
        <h1 className='text-tertiary'>{'}'}</h1>
        </div>

        <div className='h-[400px]'>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_eroqjb7w.json"  
            background="transparent"  
            speed="1"  
            autoplay
        ></lottie-player>
        </div>
      </div>
    </div>
  )
}

export default Contact
