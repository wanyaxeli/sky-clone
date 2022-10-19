import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Url from '../url/Url';
import Cart from '../pages/cart/Cart';
import Banner from '../banner/Banner';
export default function UrlLinks() {
return (
    <Router>
    <Url/>
    <Routes>
        <Route path= "/" exact element= {<Banner/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
    </Routes>
    </Router>
)
}
