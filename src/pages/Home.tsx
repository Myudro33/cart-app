import React, { useEffect } from 'react'

const Home = ({setUrl}:any) => {
 useEffect(()=>{
   setUrl('/')
 },[])
  
  return (
    <div>Home</div>
  )
}

export default Home