
import './App.css';
import React,{createContext} from 'react'
import Links from './components/links/Links';
import UrlLinks from './components/urlLinks/UrlLinks';
export const myData= createContext("")
function App() {
  let allItems = [{category:"menfashion",price:200,url:"/images/polo.png",stock:5,name:"polo-shirt",id:1,quantity:1},
{category:"menfashion",price:500,url:"/images/shirt.png",stock:30,name:"shirt",id:2,quantity:0},
{category:"menfashion",price:1000,url:"/images/watch.png",stock:10,name:"watch",id:3,quantity:0},
{category:"momenfashion",price:1200,url:"/images/dress.png",stock:6,name:"dress",id:4,quantity:0},
{category:"womenfashion",price:200,url:"/images/ring1.png",stock:4,name:"ring",id:5,quantity:0},
{category:"womenfashion",price:800,url:"/images/ring2.png",stock:8,name:"bracelette",id:6,quantity:0},
{category:"electronics",price:5000,url:"/images/laptop.png",stock:2,name:"laptop",id:7,quantity:0},
{category:"electronics",price:3000,url:"/images/Desktop.png",stock:7,name:"desktop",id:8,quantity:0},
{category:"cars",price:10000,url:"/images/car-img.png",stock:5,name:"lambo",id:9,quantity:0},
{category:"cars",price:1000,url:"/images/blog-img.png",stock:3,name:"audi",id:10,quantity:0}
]
  return (
    <div className="App">
      <myData.Provider value={allItems}>
        <UrlLinks/>
        <Links/>
      </myData.Provider>
    </div>
  );
}

export default App;
