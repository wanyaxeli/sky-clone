import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from '../itemsNav/Nav';
import Cars from '../pages/cars/Cars';
import Categories from '../pages/categories/Categories';
import Electronics from '../pages/electronics/Electronics';
import MenFashion from '../pages/menFashion/MenFashion';
import WomenFashion from '../pages/womenFashion/WomenFashion';
export default function Links() {
return (
    <div>
        <Router>
        <Nav/>
        <Routes>
            <Route path="/" exact element= {<Categories/>}/>
            <Route path="/menfashion" exact element= {<MenFashion/>}/>
            <Route path="/womenfashion" exact element= {<WomenFashion/>}/>
            <Route path="/electronics" exact element= {<Electronics/>}/>
            <Route path="/cars" exact element= {<Cars/>}/>
        </Routes>
        </Router>
    </div>
)
}
