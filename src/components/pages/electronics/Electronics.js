
import React,{useContext} from 'react'
import { myData } from '../../../App'
export default function Electronics() {
   const data = useContext(myData)
    const filteredinfo= data.filter(data=>{
        return data.category === "electronics"
    })
    console.log(filteredinfo)
  return (
    <div className='item-wrapper'>
    { filteredinfo.map((data,index)=>{
    return(
        <div key={index} className='card-wrapper'>
            <div><img src={data.url} alt={data.name}></img></div>
            <div><p>{data.name}</p></div>
            <div><p>${data.price}</p></div>
            <button>Add to cart</button>
        </div>
    )
    })}
    </div>
)
}
