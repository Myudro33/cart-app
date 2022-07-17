import React, { useEffect } from 'react'

const About = ({setUrl}:any) => {
  useEffect(()=>{
    setUrl('/about')
  },[])
  
  return (
    <div>About</div>
  )
}

export default About