import { Mail,User,Send, Check} from 'lucide-react'
import { BrevoClient } from '@getbrevo/brevo';
import React, { useState } from 'react'
import images from '../assets/Icons';



const Contact = (props) => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const [isMessageSent, setIsMessageSent]=useState(false)
    const [loading, setIsLoading]=useState(false)
    

    const brevo = new BrevoClient({ 
        apiKey:import.meta.env.BREVO_API_KEY
    });
    
   

    const handleSubmit=async (e)=>{
        e.preventDefault();
         
          try {
            setIsLoading(true)
            const result = await brevo.transactionalEmails.sendTransacEmail({
              subject: `Message from my Portfolio website from ${formData.email}`,
              htmlContent: formData.message ,
              
           
              sender: { 
                name: 'sulaymankinteh', 
                email: 'sulaymankinteh918@gmail.com' 
              },
              
            
              to: [{ 
                email: 'sulaymankinteh918@gmail.com'
                 }],
                 });
                console.log('Email sent successfully. Message ID:', result.messageId);
                 setIsMessageSent(true)
              
              
            } catch (error) {
                 console.error('Brevo API Error:', error);
                throw error;
                }
                finally{
                  setIsLoading(false)
                }



    }

    const handleChange=(event)=>{
        const{name,value}=event.target;

        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))


    }

    



  return (
    <div className='min-h-screen p-3 flex flex-col justify-center relative  ' id='contact'>
     
          <div className='flex gap-4 items-center flex-col justify-center pb-4 pt-12'>
            <h1 className='text-3xl font-bold text-center  font-comic '>Get in touch</h1>
                <h2 className='text-2xl font-bold'><span className='text-blue-400'>Lets build </span>something awesome</h2>
            </div> 
         

          <div  className={`p-4 flex ${props.isDarkMode ?"border-slate-800 ":""} border-2 shadow-lg rounded-md  md:w-1/2 md:m-auto  `}>
            <form onClick={handleSubmit}    className='flex flex-col gap-3 w-full p-2 '>
                <div className={` flex gap-2 items-center justify-center rounded-full ${props.isDarkMode ?"border-slate-800 ":""} p-4 border-2`}> 
                   <div><User/></div>
                  <input value={formData.name} onChange={handleChange} type="text" name='name' placeholder='enter your name' className={`w-full bg-transparent border-none text-lg focus:outline-none ${props.isDarkMode?"":"placeholder:text-slate-700"} `} />
                </div>
                <div className={` flex gap-2 items-center justify-center rounded-full p-4 border-2 ${props.isDarkMode ?"border-slate-800 ":""}`}> 
                   <div><Mail/></div>
                  <input value={formData.email} onChange={handleChange} type="email" name='email' placeholder='enter your email' className={`w-full bg-transparent border-none ${props.isDarkMode?"":"placeholder:text-slate-700"} text-lg  focus:outline-none` } />
                </div>
               
                <textarea value={formData.message} onChange={handleChange} name="message" id="" placeholder='enter message' rows="5" className={`rounded-md  bg-transparent border-2 ${props.isDarkMode ?"border-slate-800 ":"placeholder:text-slate-700"} text-xl p-2 focus:outline-none "}`}></textarea>
                  {!isMessageSent ?   <button disabled={loading}  className={` w-full rounded-full  border-2 ${props.isDarkMode ?"border-slate-800":""}  p-4 bg-blue-400 text-xl font-signika
                   flex justify-center items-center gap-2   `}>
                              send message
                               <Send/>
                           </button> :   <button  className={` w-full rounded-full  border-2 ${props.isDarkMode ?"border-slate-800":""}  p-4 bg-green-600 text-xl  font-signika flex justify-center items-center gap-2   `}>
                               message successfully sent
                               <Check  />
                           </button> }
                   
            </form>
          

        </div>

          <div className='grid justify-center  '>
            <h1 className='text-3xl font-comic text-center font-bold py-8'> <span className='text-blue-400'>Or Lets Connect</span> through my socials</h1>
             <div className='flex justify-center items-center  md:grid md:grid-cols-4 gap-4 font-patrick text-lg'>
                <div className='flex flex-col justify-center items-center'> <img src={images.mailIcon} alt=" " className='  h-12 w-12 md md:w-24 md:h-24 hover:scale-105 transition duration-200' />
                   <h1>Email</h1>
                </div>
                <div  className='flex flex-col justify-center items-center'>
                 <img src={images.linkedInIcon} alt="" className='h-12 w-12 md md:w-24 md:h-24 hover:scale-105 transition duration-200' />
                    <h1>LinkedIn</h1>
                </div>
               <div  className='flex flex-col justify-center items-center'>
              <img src={images.facebookIcon} alt="" className='h-12 w-12 md:w-24 md:h-24 hover:scale-105 transition duration-200 bg-white rounded-md' />
                 <h1>Facebook</h1>
               </div>
                 
                  <div  className='flex flex-col justify-center items-center'>
                     <img src={images.gitHub1} alt="" className='h-12 w-12 md md:w-24 md:h-24 hover:scale-105 transition duration-200 ' />
                     <h1> GitHub</h1>
                  </div>
             </div>
          </div>
          <h1 className='text-lg  text-center text-gray-400  absolute bottom-2 left-9  mt-8 pt-8 md:static'>Sulaymankinteh @2026  All rights reserved </h1>
          
      
      
    </div>
  )
}

export default Contact
