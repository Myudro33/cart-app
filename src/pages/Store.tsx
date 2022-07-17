import React, { useEffect } from 'react'
import StoreItem from '../components/StoreItem'
import StoreItems from '../data/items.json'

const Store = ({setUrl}:any) => {
  useEffect(()=>{
    setUrl('/store')
  },[])
  
  return (
    <>
      <h1>Store</h1>
      <div className='flex flex-wrap sm:justify-center'>
        {StoreItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Store