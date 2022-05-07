import React from 'react'
import "./Mensample.css"

export const Mensample = () => {
  return (
      <>
      <div className='men_sample flex'>
          <div>
              <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1258158/a2545ecd9bdcd9112047c09933a088be/promo-1-intl-image-data.jpg/w1500_q80.jpg" alt="" />
              <h3>LIGHT LAYERS AT UP TO 65% OFF</h3>
              <p>Get ready for the sun in these Just In jackets</p>
              <button className='btn'>SHOP CASUAL JACKETS</button>
          </div>
          <div>
              <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1258160/a11ff3c70fd2f4c531743e021d299540/promo-2-intl-image-data.jpg/w1500_q80.jpg" alt="" />
              <h3>TIMELESS T-SHIRTS AT UP TO 55% OFF</h3>
              <p>Print, plain and perfect — tees to keep on rotation

</p>
              <button className='btn'>SHOP T-SHRIT</button>
          </div>
          <div>
              <img src="https://www.theoutnet.com/cms/ycm/resource/blob/1258162/a6c325b9bcf4f75d6d15fe02fb839a2d/promo-3-intl-image-data.jpg/w1500_q80.jpg" alt="" />
              <h3>OFF-DUTY ESSENTIALS AT UP TO 70% OFF</h3>
              <p>Casual pants by in-demand designers</p>
              <button className='btn'>SHOP CASUAL PANTS</button>
          </div>
      </div>
      </>
  )
}
