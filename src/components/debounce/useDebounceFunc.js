import React,{useEffect,useState} from 'react'

export default function useDebounceFunc(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
useEffect(()=>{
    const handleDelay = setTimeout(()=>setDebouncedValue(value),delay)
    return ()=> clearTimeout(handleDelay)
},[value,delay])
return debouncedValue
};
