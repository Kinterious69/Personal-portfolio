import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const SchrollEffect = ({children}) => {
    const [isVisible,setIsVisile]=useState(false)
   const ref = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsVisile(true)
                    observer.unobserve(entry.target)
                }
            },{
                threshold:0.15,
            }
        )
        if(ref.current){
            observer.observe(ref.current)
        }
        return ()=>{
            observer.disconnect()
        }
    },
    [])
  return (
    <div ref={ref} className={`transition duration-500  delay-400 ease-in-out ${isVisible?"opacity-100 translate-y-0" :"opacity-0 translate-y-6"}`}>
        {children}
      
    </div>
  )
}

export default SchrollEffect
