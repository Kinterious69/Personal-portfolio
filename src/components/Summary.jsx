import React from 'react'
import Type from 'typewriter-effect'
import images from '../assets/Icons'
import { ArrowBigRight, Mail,  } from 'lucide-react'
import { Link } from 'react-router'
import Contact from './Contact'
import Projects from './Projects'




const Summary = () => {
  return (
    
    <div className=' w-full min-h-screen bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]    mb-12    'id='summary'>
     
      <section className='flex-col  w-full flex  p-4  gap-4   min-h-screen md:flex-row md:px-16 '>
   <div className='  text-justify text-lg flex-col gap-2 p-3  flex   md:mt-[20vh]   md:w-1/2     '>
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
      
         
        <p className='text-justify hyphens-auto   font-patrick text-2xl pb-3'>A BSc Computer Science student and aspiring backend engineer fascinated by robust system architectures and AI/Machine Learning. I transform complex logical concepts into scalable, highly-performant backend ecosystems and intelligent data pipelines.</p>
        <div className='flex flex-col md:flex-row gap-4 font-signika  '>
           <a  href='#projects'  className='px-6 py-2 font-medium bg-blue-400  rounded-full hover:scale-105 transition duration-300 flex gap-2 justify-center  items-center'>
               View My Work 
             <ArrowBigRight/>
             </a>
             
         
         
            <a href='#contact' className='px-8 py-2  font-medium bg-blue-400 rounded-full hover:scale-105 transition duration-300 flex gap-2  justify-center  items-center '>Contact Me 
            <Mail/></a>
          
        </div>
   </div> 
   <div className=' p-2  md:w-96   m-auto  '>
    <img src={images.myPhotoIcon1}alt="" className='rounded-full  w-80 h-80 md:w-96 md:h-96' loading='lazy' />
   </div>

</section>
    
    </div>
   
  )
}

export default Summary
