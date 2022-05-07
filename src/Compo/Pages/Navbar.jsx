import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='container'>
        <div className=''>
        <i class="fa-regular fa-user"></i>
        <a href="#">Sign in</a>
        <hr />
        <a href="#">India</a>
        </div>
        <div>
            <a href="#">Track your order</a>
            <hr />
            <a href="#">Create a return</a>
            <hr />
            <a href="#">Customer Care</a>
            <hr />
            <a href="#">Delivery</a>
            <hr />
            <a href="#">Returns</a>
        </div>
    </div>
  )
}
