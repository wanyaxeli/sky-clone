import React,{useContext,useEffect,useState} from 'react'
import { myData } from '../../App'
export default function SearchedItems(props) {
    const[searchedItems,setSearchedItems] = useState([])
    const data= useContext(myData)
    const handleSelected=(id)=>{
    let gottenData= data.find(item=>item.id === id )
    setSearchedItems(gottenData)
    }
    useEffect(()=>{
        localStorage.setItem('search',JSON.stringify(searchedItems))
    },[searchedItems])
return (
    <div className ={ `search-list ${props.display.see}`}>
        <ul>
                {props.item.map(item => <li key={item.id} onClick={()=>handleSelected(item.id)}>{item.name}</li>)}
        </ul>
    </div>
)
}
