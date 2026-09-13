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
    // 💡 Introduce a tiny delay so the browser has time to render the spinner
    const timer = setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.style.opacity = '0'; // Triggers smooth CSS fade out
        setTimeout(() => {
          loader.remove(); // Removes it from the DOM
          setShowApp(true); // Loads your text and layouts safely
        }, 400); // Matches the CSS transition time
      } else {
        setShowApp(true);
      }
    }, 300); // 300ms guarantee window for spinner display

    return () => clearTimeout(timer);
  }, []);

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
