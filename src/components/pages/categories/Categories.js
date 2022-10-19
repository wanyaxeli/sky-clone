import React,{useContext,useEffect,useState} from 'react'
import { myData } from '../../../App'
export default function Categories() {
  let data= useContext(myData)
  const [pickedItem,setPickedItem]=useState(
    []
  )
const handlePickedvalue = (id)=>{
  if(pickedItem.some(item=>item.id===id)){
    alert("already picked" ) 
  }
  else{
let item= data.find(item=>item.id===id)
setPickedItem((preitem)=>{return[...preitem,item]})
  }
}
useEffect(()=>{
localStorage.setItem("myItem",JSON.stringify(pickedItem))
},[pickedItem])
  return (
    <div className='item-wrapper'>
    {data.map((data,index)=>{
      return(
      <div key={index} className='card-wrapper'>
        <div><img src={data.url} alt={data.name}></img></div>
        <div><p>{data.name}</p></div>
        <div><p>${data.price}</p></div>
        <button onClick={()=>handlePickedvalue(data.id)}>Add to cart</button>
      </div>
      )
    })}
    </div>
  )
}
