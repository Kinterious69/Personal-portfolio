import React from 'react'
import {ArrowUpRightIcon} from "lucide-react"
import images from '../assets/Icons'
import { Link } from 'react-router'




const Projects = (props) => {
   
    const projects=[
        {
            name:"Student Management System",
            describtion:"A role based full stack student management system built using the MERN stack where students can register for courses and view  grades. Admins can manage students and perform CRUD operations. ",
            image:images.usms,
            technologies:["Node.Js","Javascript","Express.Js","React","Bootstrap","Recharts","React toast","Vite"],
            link:"https://student-management-frontend1.netlify.app/"
        },
        {
            name:"MERN Authentication System",
            describtion:"A full MERN authentication system where  users can  authenticate and reset there passwords when forgotten and can also verify there account.The system is integrated with real email and toast notifications ",
            image:images.mern,
            technologies:["Node.Js","Express.Js","Javascript","React","Brevo email","React toast","Vite"],
            link:"https://mern-backend-authentication.vercel.app"
        },
        {
            name:"Fake News Detection System",
            describtion:"An end-to-end NLP application that detects misinformation using DistilBERT with LIME-based explainability . This system classifies news claims as Real or Fake using a fine-tuned DistilBERT transformer model, and explains why through LIME word-level highlighting.",
            image:images.fake,
            technologies:["python","NLP","Pandas","Numpy","Streamlit"],
            link:"https://huggingface.co/spaces/kinterious-69/fake-news-detector"
        },
        {
            name:"Full Stack Ecommerce Application",
            describtion:"A full-stack e-commerce platform built with the MERN stack, featuring secure user authentication, product browsing, shopping cart management. The application includes a responsive user interface, a backend REST API  and  MongoDB used for data storage.",
            image:images.ecommerce,
            technologies:["React","Javascript","Css","Node.Js","Express.Js"],
            link:"https://ecommerce-frontend-six-ochre.vercel.app"
        },
    ]
  return (

    <div className='min-h-screen md:grid md:justify-center p-4 ' id='projects'>
          
        <h1 className='font-bold text-3xl text-center font-comic mb-5'>Projects</h1>
      
        <div className='grid grid-cols-1 md:grid-cols-3  gap-8          ' >
            {
                projects.map((project,key)=>(
                  <div  key={key} className={`grid  gap-2 border-2   p-4 ${props.isDarkMode?"border-slate-800": "border-2"} relative md:w-96  shadow-lg  rounded-md   `} > 
                       <Link to={project.link} target="_blank"> <div   className='absolute  top-2 right-2 flex justify-center items-center    bg-slate-700 text-white  rounded-full px-2 py-0.5 font-medium'>
                    <h1 className='text-xs cursor-pointer hover:scale-105'>Live Demo</h1>
                           <h1 className=''><ArrowUpRightIcon className='text-blue-400 hover:scale-110 size-4'/></h1>
                        </div>
                        </Link>        

                        <h1 className='text-3xl font-semibold text-center pt-4 md:pt-5 font-alumni  '>{project.name}</h1>
                        <h2 className='text-justify'>{project.describtion}</h2> 
                       
                       
                         <img src={project.image} alt="student-management" loading='lazy'/>
                         <div className='flex flex-wrap gap-1.5 items-center justify-center text-white pt-3 font-patrick '>
                            
                           {
                            project.technologies.map((tech)=><span className='px-3 py-1 bg-slate-800 rounded-full hover:scale-110 transition duration-300'>{tech}</span>)
                           }
                         </div>

                    </div>
                    

                ))
            }

        </div>
   

    
      
    </div>
  )
}

export default Projects
