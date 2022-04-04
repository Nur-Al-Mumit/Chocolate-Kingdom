import React from 'react';
import "./Chocolate.css"
const Chocolate = ({onClick, data}) => {
    const {name, img, price} = data
    // console.log(name);
    return (
        <div className='chocolate'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className='chocolate-price'>${price}</p>
            <div>
                <button onClick={() => onClick(data)} className='add-btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Chocolate;