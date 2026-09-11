import React from 'react'
import Type from 'typewriter-effect'
import images from '../assets/Icons'


const Summary = () => {
  return (
    
    <div className=' w-full min-h-screen    mb-12    'id='summary'>
     
      <section className='flex-col  w-full flex  p-4  gap-4   min-h-screen md:flex-row md:px-16 '>
   <div className=' text-justify text-lg flex-col gap-2 p-3  flex   md:mt-[20vh]   md:w-1/2     '>
      <h1 className='text-2xl text-center md:text-start md:ml-1 '>Hi, I am</h1>
        <h2 className='text-5xl text-center md:text-start '>SULAYMAN KINTEH</h2>
       <div className='flex gap-2  md:ml-0 md:justify-start text-2xl text-blue-400 font-bold ' > 
        <h1 className='ml-4 md:ml-0'>I am a</h1>
          <Type
          options={
            {
              strings:["Software Developer","Full Stack Developer", "Backend Developer"],
              autoStart:true,
              loop:true,
              delay:25,
              deleteSpeed:20
            }
          }
          />
        
        </div> 
      
         
        <p className='text-justify font-patrick text-2xl pb-3'>A BSc Computer Science student and an aspiring software developer fascinated by backend development and Al/Machine Learning. I transform ideas into elegant, user-friendly digital experiences.</p>
        <div className='flex flex-col md:flex-row gap-4 font-signika '>
          <button className='px-4 py-2 font-medium bg-blue-400  rounded-full hover:scale-105 transition duration-300  '>View My Work</button>
          <button className='px-6 py-2  font-medium bg-blue-400 rounded-full hover:scale-105 transition duration-300'>Contact Me</button>

        </div>
   </div> 
   <div className=' p-2  w-96  m-auto  '>
    <img src={images.myPhotoIcon1}alt="" className='rounded-full  w-96 h-96 ' />
   </div>

</section>
    
    </div>
   
  )
}

export default Summary
