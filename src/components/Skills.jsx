import React, { useState } from 'react'
import images from '../assets/Icons'
import SchrollEffect from '../animate/SchrollEffect'




const Skills = (props) => {
    const[category, setCategory]=useState("All")
    const[focusedCategory, setFocusCategory]=useState("All")
    const skills =[
        {
            name:"React.js",
            img:images.reactIcon,
            category:"Frontend"

        },
        {
            name:"JavaScript",
            img:images.javascriptIcon,
            category:["Backend","Frontend"]

        },
        {
            name:"TypeScript",
            img:images.typeScriptIcon,
            category:["Backend","Frontend"]

        },
        {
            name:"Node.js",
            img:images.nodeIcon,
            category:"Backend"

        },
        {
            name:"TailwindCSS",
            img:images.tailwindIcon,
            category:"Frontend"

        },
        {
            name:"Java",
            img:images.javaIcon,
            category:"Backend"

        },
          {
            name:"Python",
            img:images.pythonIcon,
            category:["Backend","Frontend"]

        },
        {
            name:"MongoDB",
            img:images.mongoIcon,
            category:"Databases"


        },
        {
            name:"PosgreSQL",
            img:images.posgreIcon,
            category:"Databases"

        },
        {
            name:"Express",
            img:images.expressIcon,
            category:"Backend"

        },
        {
            name:"tensorFlow",
            img:images.tensorflowIcon,
            category:"AI/ML"

        },
        {
            name:"Git",
            img:images.gitIcon,
            category:"Tools"

        },
        {
            name:"GitHub",
            img:images.gitHubIcon,
               category:"Tools"

        },
        {
            name:"Numpy",
            img:images.numpyIcon,
            category:"AI/ML"

        },
        {
            name:"Pytorch",
            img:images.pyTorchIcon,
               category:"AI/ML"

        },
      
        {
            name:"MySQL",
            img:images.mySqlIcon,
               category:"Databases"

        },
        {
            name:"CSS3",
            img:images.cssIcon,
               category:"Frontend"

        },
        {
            name:"Html",
            img:images.htmlIcon,
               category:"Frontend"

        },
        {
            name:"Postman",
            img:images.postmanIcon,
               category:"Tools"

        },
     
    ]
    const buttons =[
        "All",
        "Backend",
        "Frontend",
        "Databases",
        "Tools",
        "AI/ML"
       

    ]
    const filteredCategory =
       category==="All"? skills   
        :   skills.filter((skill)=>skill.category.includes(category))
        
    

  return (
    <div className=' min-h-screen px-8 gap-6 md:px-12  ' id='skills'>
   
         
     <h1 className='text-center text-3xl font-bold  top-4 font-comic  '>Skills</h1>
     <div className=' flex flex-col gap-4 p-2  justify-center items-center'>
   
       <div className='grid grid-cols-3 gap-2 mt-8  '>
       {
        buttons.map((button,key)=>(
            <div key={key} onClick={()=>{setFocusCategory(button),setCategory(button)}} className={ `  ${props.isDarkMode?"border-2 border-slate-800  ":"border-2  "} ${   button === focusedCategory ? "bg-blue-400" :""}  font-semibold 
            rounded-full px-1.5 py-1 md:px-4 md:py-2 text-center hover:scale-105 transition duration-200`}>
                  
                <button  >{button}</button>
            
            </div>
        ))
       }
       </div>
     
    <div className='grid grid-cols-2  md:grid-cols-3 gap-2 mb-8   ' >
        {  
            
            filteredCategory.map((skill,key)=>(
                 <div  key={key} className={` flex  flex-col  gap-2 border-2 shadow-lg ${props.isDarkMode ? "border-slate-800" : "border-2"}  rounded-md p-2  w-full items-center  md:ml-[6vw] hover:scale-105 transition duration-300   md:w-64 md:p-2 md:gap-2 `}>
                     <div className=''><img src={skill.img} alt="" className='h=12 w-12  ' loading='lazy' /></div>  
                  <div className='bg-green'><h1 className=' text-xl font-signika  '>{skill.name}</h1></div>  
                 
                 </div>
            ))
        }
      </div>
      </div>
  
  
    
    </div>
  )
}

export default Skills
