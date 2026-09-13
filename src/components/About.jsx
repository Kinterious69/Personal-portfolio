import React from 'react'
import images from '../assets/Icons'
import { Settings,Brain,Rocket,Search,Book, ChartAreaIcon, ChartBar, ChartArea, ChartNetworkIcon, ChartLineIcon, MessageCircle} from 'lucide-react'


const About = (props) => {
  const traits= [
    {
      trait:["Problem Solver"],
      discription:"I enjoy breaking down complex challenges and turning them into practical solutions.",
      icon:Brain
    },
    {
      trait:["Continuous Learner"],
      discription:"I'm constantly exploring new technologies and strengthening my development skills.",
      icon:Book
    },
    {
      trait:["Backend Focused"],
      discription:"I enjoy designing APIs, authentication systems, databases, and reliable server-side applications.",
      icon:Settings
    },
    {
      trait:["Adaptable & Curious"],
      discription:"I'm always willing to learn, experiment, and adapt to new technologies and approaches.",
      icon:Rocket
    },
    {
      trait:["Detail Oriented"],
      discription:"I care about writing clean, maintainable code and creating polished applications.",
      icon:Search
    },
  ]
  return (

    <div className='min-h-screen flex flex-col justify-center items-center relative ' id='about'>
     
        <h1 className='text-3xl font-bold text-center  absolute top-4 font-comic  '>About</h1>

        <div className='flex flex-col md:flex-row justify-center items-center pt-6    '>
            <div className='w-full flex justify-center items-center md:w-1/2 pt-12 '>
                <img src={images.myPhotoIcon2} alt="" className='w-64 md:w-96 rounded-md' />
            </div>
                  
            <div className='w-full md:w-1/2  px-6 py-8 text-lg '>
             <h1 className='font-bold text-3xl text-center  mb-5'><span className='text-blue-400'>Transitioning </span>Imaginations Into The Real World </h1>
               <p className='text-justify hyphens-auto   md:text-justify font-patrick text-2xl'>my name is <strong>sulayman kinteh</strong> and am an aspiring backend developer with skills in backend technology such as node.js express.js databases
                 mongoDB, posgreSQL, MySQL, and tools such as Git and Github.I also have a passion for Artificial Intelligence and areas in Artificial Intellligence such as Machine Learning, Deep Learning and Natural Language Processing.Am also skilled in Artificial Intelligence and Machine Learning tools and  technologies such as Pytorch, Numpy, Pandas, Tensorflow,Hugging Face, and Google Colab. Am consistently improving and bulding more projects with an aim to solve real world problems and to further strenghten my skills 
               </p>
               <div className='flex flex-col md:flex-row pt-8'>
            <a href='#contact'  className=' px-8 py-2 font-signika font-medium mt-4 md:ml-[4vw] md:w- rounded-full bg-blue-400 hover:scale-105 transition duration-300 flex gap-2 justify-center  items-center'>lets connect
               <MessageCircle/></a>
            </div>
            </div>

        </div>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 py-8 '>
          
         {
          traits.map((t)=>(
            <div className={` rounded-md border-2 shadow-lg text-center hover:scale-105 transittion duration-200 w-64 flex flex-col justify-center items-center p4 ${props.isDarkMode?"border-slate-800" : ""}     p-4`}>
                  <p className=''><t.icon/></p>
                 <h1 className='text-xl font-signika '>{t.trait}</h1>
                 <p className='text-justify text-lg hyphens-auto font-patrick'>{t.discription}</p>
                 
            </div>
          ))
         }

        </div>
        
      
    </div>
  )
}

export default About
