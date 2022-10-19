import React,{useState,useEffect} from 'react'

export default function Banner() {
    let bannerImages= [{name:"cars",url:"/images/image1.jpg"},
    {name:"computers",url:"/images/image3.jpg"},
    {name:"game",url:"/images/game-bg.png"},
    {name:"camera",url:"/images/image2.jpg"}
]
const [imageIndex,setImageIndex] = useState(0)
const handleleft = ()=>{
if(imageIndex===0){
    setImageIndex(bannerImages.length - 1)
}else{
    setImageIndex(imageIndex - 1)
}
}
const handleright = ()=>{
    if (imageIndex===bannerImages.length-1) {
        setImageIndex(0)
    }else{
        setImageIndex(imageIndex + 1)
    }
}
function runAutomatic (){
    if (imageIndex===bannerImages.length-1) {
        setImageIndex(0)
}else {
    setImageIndex ((imageIndex)=> imageIndex + 1
)
}
}
useEffect(()=>{
    const handleAutorun = setTimeout(runAutomatic,4000)
    return ()=>clearTimeout(handleAutorun);
    // eslint-disable-next-line
},[imageIndex])
return (
    <div className='banner'>
        <img src={bannerImages[imageIndex].url} alt={bannerImages[imageIndex].name}></img>
        <div onClick={handleleft} className='left-arrow'><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></div>
        <div onClick={handleright} className='right-arrow'><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
    </div>
)
}
