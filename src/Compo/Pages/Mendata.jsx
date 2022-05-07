import React,{useState} from 'react'
import "./Mendata.css"
import Navbar from './Navbar'
import { Title } from './Title'
import 'antd/dist/antd.css';
import "./Modal.css";
import { Result, Button } from 'antd';

export const Mendata = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
   
  return (
    <>
    <Navbar/>
    <Title/>
    <btnpress/>
    <h1 className='valen' >VALENTINO</h1>
    <hr />
    <div className='data_container'>
    <div className='catagory'>
        <div className='left_sort'>
        <p>Catagory</p>
        <p>ALL</p>
        <input type="radio" /> Male
        <br />
        <input type="radio" /> Accessories
        <br />
        <input type="radio" /> Clothing
        <br />
        <input type="radio" /> Shoes
        <p>Clothing size</p>
        <p>All</p>
        <hr />
        <p>Shirt size</p>
        <p>All</p>
        <hr />
        <p>Colour</p>
        <p>All</p>
        <hr />
        <p>Price</p>
        <hr />
        <p>Desiner</p>
        <p>All</p>
        </div>
        </div>
        <div className='right_data'>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/30629810019663650/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Slim-fit two-tone <br /> ribbed-knit zip-up cardigan</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$462</p>
                {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/43769801095263657/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Slim-fit studded faded <br /> denim jeans</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$352</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/43769801095204399/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO GARAVANI</h3>
                <p>Suede-trimmed painted <br /> leather sneakers</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$449</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/43769801095418375/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Wool-jacquard jacket</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$3,462</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/1647597277408176/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Intarsia wool and <br /> cashmere-blend sweater</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$262</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/1647597277678999/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Tapered wool and <br /> mohair-blend pants</p>
                <button onClick={toggleModal} className='data_btn' >Buy now</button>
                <p className='price' >$160</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/43769801095393605/E/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Slim-fit two-tone <br /> ribbed-knit zip-up cardigan</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$256</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/1647597277936186/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Slim-fit two-tone <br /> ribbed-knit zip-up cardigan</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$462</p>
            </div>
            <div className='main_data'>
                <img src="https://www.theoutnet.com/variants/images/43769801095393606/R/w358_q80.jpg" alt="" />
                <h3>VALENTINO</h3>
                <p>Slim-fit two-tone <br /> ribbed-knit zip-up cardigan</p>
                <button onClick={toggleModal} className="data_btn" >Buy now</button>
                <p className='price' >$265</p>
            </div>
        </div>
    </div>
    {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
              <img className='pop_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dpmdyE3fWE7s4sxaQkzc7j9NkefQ_RuzNllWZMkgqY-hrcgDzddc90sFz9NoAwfJttU&usqp=CAU" alt="" />
            <h2>Successfully Purchased</h2>
            <p>
            Order number: 2017182818828182881 server configuration takes 1-5 minutes.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
  
}
