import React from "react";
import "./Title.css"
import { ReactDOM } from "react";
import { Women } from "./Women";
import {
    Link
  } from "react-router-dom";
  import { Main } from "../Main";

export const Title = () => {
  return (
    <div className='title_container'>
        <div className='uppertitle'>
            <div className='upper_left flex'>
                <div> <Link to="/Women"> Women</Link> </div>
                <hr />
                <div> <Link to="/"> Men</Link> </div>
            </div>
            <div className='upper_mid'>
                <h1>The Outnet</h1>
            </div>
            <div className='upper_right flex'>
                <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                    <a>Search</a>
                </div>
                <div className='flex'>
                    <div>
                    <i class="fa-regular fa-heart"></i>
                    </div>
                    <hr />
                    <div>
                    <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='lower_section'>
            <a href="#">Just In</a>
            <a href="#">Designers</a>
            <a href="#">Bestsellers</a>
            <a href="#">Clothing</a>
            <a href="#">Shoes</a>
            <a href="#">Accessories</a>
            <a href="#">Sport</a>
            <a href="#">Wardrobe Staples</a>
            <a href="#">70% Off</a>
            <a href="#">Editorial</a>
        </div>
        <hr />
        <div className='code_off'>
            <div>
Extra 15% off your first clothing order with code FIRST15
            </div>
            <hr />
            <div>
Delivery Delays: Please note your order may take longer than usual.
            </div>
            <hr />
            <div>
            App-y shopping: Download our new app
            </div>
        </div>
    </div>
  )
}
