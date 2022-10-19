import React ,{useState,useContext,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { myData } from '../../App'
import useDebounceFunc from '../debounce/useDebounceFunc'
import SearchedItems from '../searchedItem/SearchedItems'
export default function Url() {
  const [value,setValue]=useState("")
  const[visible,setVisible]=useState({
    see:""
  })
  const handleChange=(e) =>{
    setValue(e.target.value.toLowerCase())
  }
  const data = useContext(myData)
  let chosenData= data.filter(data=>{
    return data.name.toLowerCase().includes(value)
  })

  const handlefocus= () => {
    setVisible({
      see:"display-block"
    })
  }
  const handleBlur= ()=>{
    setVisible({
      see:""
    })
  }
  
  const debounceValue = useDebounceFunc(handleBlur,2000)
  return (
    <div className='url-bar'>
        <nav>
            <div className='logo'><img src='/images/sky.png' alt='logo'></img></div>
            <div> <input type='search' onChange={handleChange} onFocus={handlefocus} onBlur={debounceValue } placeholder="search items"/> <button className='search-btn'><i className="fa fa-search" aria-hidden="true"></i></button></div>
            <div><p>Login <i className="fa fa-user" aria-hidden="true"></i></p></div>
            <div><Link to ="/cart"><p>Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i></p></Link></div>
        </nav>
        <SearchedItems display={visible} item={chosenData}/>
    </div>
  )
}
