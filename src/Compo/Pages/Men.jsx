import React from 'react'
import "./Men.css"
import { Mendata } from './Mendata'
import {
    Link
  } from "react-router-dom";


export const Men = () => {
  return (
      <>
    <div className='img_container'>
        <div className='left'>
        <Link to="./men">
        <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1258138/4b5cb3ae56decf05cfc7350d958341e8/main-1-intl-image-data.jpg/w1500_q80.jpg" alt="" />
        </Link>
        <p>VALENTINO AT UP TO 70% OFF
            <br />
Add a dash of luxury from the legendary label</p>
<Link to="./men">
<button className='img_btn'> SHOP DOLCE & GABBANA</button>
</Link>
        </div>
        <div className='right'>
            <Link to="./men">
            <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1258144/6d85aef7b91bfcb9cc17a9cd39f02d1a/main-2-intl-image-data.jpg/w1500_q80.jpg" alt="" />
            </Link>
            <p>DOLCE & GABBANA AT UP TO 50% OFF
                <br />
Invest in impeccable quality and style by the iconic Italian duo</p>
<Link to="./men">
<button  className='img_btn'>SHOP VALENTINO</button>
</Link>
        </div>
        </div>
        <div className='flex lower_style'>
            <div>
                <h1>JUST IN</h1>
                <p>A curated selection of the latest styles</p>
                <a href="#">View more</a>
            </div>
            <div>
            <img src="https://www.theoutnet.com/variants/images/43769801095418375/F/w250.jpg" alt="" />
        <h2>VALENTINO</h2>
            </div>
            <div>
            <img src="https://www.theoutnet.com/variants/images/1647597278486266/F/w250.jpg" alt="" />
        <h2>DOLCE & GABBANA</h2>
            </div>
            <div>
            <img src="https://www.theoutnet.com/variants/images/1647597279232004/F/w250.jpg" alt="" />
        <h2>MAISON MARGIELA</h2>
            </div>
            <div>
            <img src="https://www.theoutnet.com/variants/images/1647597278998715/F/w250.jpg" alt="" />
        <h2>DOLCE & GABBANA</h2>
            </div>
            <div>
            <img src="https://www.theoutnet.com/variants/images/36856120585125097/F/w250.jpg" alt="" />
        <h2>ACNE STUDIOS</h2>
            </div>
        </div>
    </>
  )
}
