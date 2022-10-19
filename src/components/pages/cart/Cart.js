import React,{useState,useEffect} from 'react'

export default function Cart() {
    const[selectedItem,setSelectedItem]=useState([])
    const [value,setValue]= useState(1)
    const [total,setTotal]= useState(0)
    const handleDecrement =(id)=>{
    let item=selectedItem.find(item=>item.id === id )
    if(item.quantity >=1){
        setValue(item.quantity--)
    }else{
        return alert("no negatives")
    }
    } 
    const handleIncrement =(id)=>{   
    let item=selectedItem.find(item=>item.id === id )
    if (item.quantity>item.stock){
        alert ("out of stock")
    }else{
    setValue(item.quantity++)
    }
    }
    
    const handleDelete=(id)=>{
    setSelectedItem(deletedItem => deletedItem.filter(item=>item.id !== id))
    }
    const handleConfirmClear= ()=>{
    let ok =window.confirm('Do you want to clear the cart?')
    if (ok===true){
    handleClear()
    }
    }
    function handleClear (){
        setSelectedItem([])
        setTotal(0)
        localStorage.clear()
    }
    useEffect(()=>{
        let item = JSON.parse(localStorage.getItem("myItem"))
        if(item){
            setSelectedItem(item)
        }
    },[])
    useEffect(()=>{
        function getTotal (){
            let total = selectedItem.reduce((total,current)=>{return total + current.price * current.quantity },0)
            setTotal(total)
        }
        getTotal()
    },[value,selectedItem])
return (
    <div className='cart-wrapper'>
        <div className='cart-items'>
            <div className='item-wrapper'>
            {selectedItem.map((data,index)=>{
                return(
            <div key={index} className='card-wrapper'>
                <div className='closebtn' onClick={()=>handleDelete(data.id)}>&times;</div>
                <div><img src={data.url} alt={data.name}></img></div>
                <div><p>{data.name}</p></div>
                <div><p>{data.price}</p></div>
                <div className='btn-holder'><button onClick={()=>handleDecrement(data.id)}>-</button><p>{value}</p><button onClick={()=>handleIncrement(data.id)}>+</button></div>
            </div>
                )
            })}
            </div>
        </div>
        {selectedItem.length>=1 &&  <div>
                <p>Subtotal <span>{total}</span></p>
        </div>}
        {selectedItem.length>=1 && <div className='clearBtn'>
                <button onClick={handleConfirmClear}>clear cart</button>
        </div>}
    </div>
)
}
