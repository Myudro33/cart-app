import React from 'react'
type StoreItemProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

const StoreItem = ({id,name,price,imgUrl}:StoreItemProps) => {
  return (
    <div>StoreItem</div>
  )
}

export default StoreItem