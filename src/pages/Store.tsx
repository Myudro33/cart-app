import React from 'react'
import StoreItem from '../components/StoreItem'
import StoreItems from '../data/items.json'

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div>
        {StoreItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Store