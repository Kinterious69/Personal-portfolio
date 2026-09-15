import { Mail,User,Send, Check} from 'lucide-react'
import { BrevoClient } from '@getbrevo/brevo';
import React, { useState,useEffect} from 'react'
import images from '../assets/Icons';
import { Link } from 'react-router';



const Contact = (props) => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const [isMessageSent, setIsMessageSent]=useState(false)
    const [loading, setIsLoading]=useState(false)
     const [isMobile, setIsMobile] = useState(false);
  
         const  brevoApi=import.meta.env.VITE_BREVO_API_KEY
         

    const brevo = new BrevoClient({ 
        apiKey:brevoApi
    });
    

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const myEmail = "sulaymankinteh918@gmail.com"; // 👈 Put your email here
  const emailSubject = encodeURIComponent("Project Inquiry | Portfolio");
  const emailBody = encodeURIComponent("Hi there,\n\nI saw your portfolio...");
    const handleClick = (e) => {
    e.preventDefault(); 
    
    // Form the strings properly using backticks `
    const desktopUrl = `https://google.com{myEmail}&su=${emailSubject}&body=${emailBody}`;
    const mobileUrl = `mailto:${myEmail}?subject=${emailSubject}&body=${emailBody}`;
    
    if (isMobile) {
      window.location.href = mobileUrl;
    } else {
      // 🟢 This will now execute perfectly without crashing
      window.open(desktopUrl, '_blank', 'noopener,noreferrer');
    }
  };
   

   

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
            <form onSubmit={handleSubmit}   className='flex flex-col gap-3 w-full p-2 '>
                <div className={` flex gap-2 items-center justify-center rounded-full ${props.isDarkMode ?"border-slate-800 ":""} p-4 border-2`}> 
                   <div><User/></div>
                  <input value={formData.name} onChange={handleChange} type="text" name='name' placeholder='enter your name' className={`w-full bg-transparent border-none text-lg focus:outline-none ${props.isDarkMode?"":"placeholder:text-slate-700"} `} required />
                </div>
                <div className={` flex gap-2 items-center justify-center rounded-full p-4 border-2 ${props.isDarkMode ?"border-slate-800 ":""}`}> 
                   <div><Mail/></div>
                  <input value={formData.email} onChange={handleChange}  type='email' name='email' placeholder='enter your email' className={`w-full bg-transparent border-none ${props.isDarkMode?"":"placeholder:text-slate-700"} text-lg  focus:outline-none` } required />
                </div>
               
                <textarea value={formData.message} onChange={handleChange} name="message" id="" placeholder='enter message' rows="5" className={`rounded-md  bg-transparent border-2 ${props.isDarkMode ?"border-slate-800 ":"placeholder:text-slate-700"} text-xl p-2 focus:outline-none "}` }></textarea>
                  {!isMessageSent ?   <button disabled={loading} type='submit'  className={` w-full rounded-full cursor-pointer  border-2 ${props.isDarkMode ?"border-slate-800":""}  p-4 bg-blue-400 text-xl font-signika
                   flex justify-center items-center gap-2   `}>
                              send message
                               <Send/>
                           </button> :   <button   className={` w-full rounded-full  border-2 ${props.isDarkMode ?"border-slate-800":""}  p-4 bg-green-600 text-xl  font-signika flex justify-center items-center gap-2   `}>
                               message successfully sent
                               <Check  />
                           </button> }
                           
                   
            </form>
          

       
        </div>

          <div className='grid justify-center mb-8  '>
            <h1 className='text-3xl font-comic text-center font-bold py-8'> <span className='text-blue-400'>Or Lets Connect</span> through my socials</h1>
             <div className='flex justify-center items-center  md:grid md:grid-cols-4 gap-4 font-signika text-lg'>
                <button 
      onClick={handleClick}
      className="cursor-pointer group focus:outline-none"
         >
        <div className="flex flex-col justify-center items-center">
        <img 
          src={images.mailIcon} 
          alt="Email contact" 
          className="h-12 w-12 md:w-24 md:h-24 hover:scale-105 transition duration-200" 
          loading="lazy" 
        />
        <h1>Email</h1>
           </div>
           </button>

                <Link to="https://www.linkedin.com/in/sulayman-k-a8089a284" target='_blank'>
                <div  className='flex flex-col justify-center items-center'>
                 <img src={images.linkedInIcon} alt="" className='h-12 w-12 md md:w-24 md:h-24 hover:scale-105 transition duration-200' loading='lazy' />
                    <h1>LinkedIn</h1>
                </div>
                </Link>
                <Link to="https://www.facebook.com/share/1UCCXhx7fh/?mibextid=wwXIfr" target='_blank'>
               <div  className='flex flex-col justify-center items-center'>
              <img src={images.facebookIcon} alt="" className='h-12 w-12 md:w-24 md:h-24 hover:scale-105 transition duration-200 bg-white rounded-md' loading='lazy'/>
                 <h1>Facebook</h1>
               </div>
               </Link>
               <Link to="https://github.com/Kinterious69" target='_blank'>
                 
                  <div  className='flex flex-col justify-center items-center'>
                     <img src={images.gitHub1} alt="" className='h-12 w-12 md md:w-24 md:h-24 hover:scale-105 transition duration-200 ' loading='lazy'/>
                     <h1> GitHub</h1>
                  </div>
                  </Link>
             </div>
          </div>
          <h1 className='text-lg  text-center text-gray-400  absolute bottom-2 left-9  mt-18 pt-8 md:static'>Sulaymankinteh @2026  All rights reserved </h1>
          
      
      
    </div>
  )
}

export default Contact
