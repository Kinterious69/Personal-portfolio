import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Summary from './components/Summary'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SchrollEffect from './animate/SchrollEffect'



const App = () => {
  const [isDarkMode,setIsDarkMode]=useState(false)



  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.style.opacity = '0'; // Start fade out animation
        setTimeout(() => {
          loader.remove(); // Remove spinner from screen
          setShowApp(true); // Render the actual app
        }, 400);
      } else {
        setShowApp(true);
      }
    };

    // 💡 Check if the page is already fully loaded
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      // 💡 Wait until everything (fonts, structural CSS, layout) finishes loading
      window.addEventListener('load', handlePageLoad);
      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  // Don't render the heavy components until the loading screen is ready to drop
  if (!showApp) return null;

 




  return (

    <div  className={`${isDarkMode ? "bg-slate-900 text-white" : "bg-white text-black"}`} >
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

    <SchrollEffect>    <Summary/>  </SchrollEffect>  
  
    <SchrollEffect>  <About isDarkMode={isDarkMode}/></SchrollEffect>
    <SchrollEffect> <Skills isDarkMode={isDarkMode} /></SchrollEffect>
   
    
    <SchrollEffect><Projects isDarkMode={isDarkMode}  /></SchrollEffect>
 
    
   <SchrollEffect>   <Contact isDarkMode={isDarkMode} /> </SchrollEffect>
    </div>
  )
}

export default App
