import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav-container'>
        <ul>
            <li><Link to= "/">All Categories</Link></li>
            <li><Link to="/menfashion">Men's Fashion</Link></li>
            <li><Link to="/womenfashion">Women's Fashion</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><Link to="/cars">Cars</Link></li>
        </ul>
    </div>
  )
}
