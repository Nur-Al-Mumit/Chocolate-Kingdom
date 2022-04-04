import React from 'react';
import './DisplayPicture.css'

const DisplayPicture = (props) => {
    const {img, name} = props.data;
    return (
        <div>
            <h5>{name}</h5>
            <img className='display-img' src={img} alt="" />
        </div>
    );
};

export default DisplayPicture;