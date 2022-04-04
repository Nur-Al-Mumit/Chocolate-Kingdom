import React from 'react';
import Chocolate from '../Chocolate/Chocolate';
import "./Chocolates.css"

const Chocolates = (props) => {
    const chocolates = [
        {id: 1, name: "Cadbury Dairy Milk Silk", price: 144, img: "https://m.media-amazon.com/images/I/61pj9OP0IQL._SX679_.jpg"},
        {id: 2, name: "Cadbury Dairy Milk Silk Fruit and Nut", price: 80, img: "https://m.media-amazon.com/images/I/61O1KSWlmzS._SX679_.jpg"},
        {id: 3, name: "Cadbury Dairy Milk Silk Oreo", price: 100, img: "https://m.media-amazon.com/images/I/61-05Bj-KdL._SX679_.jpg"},
        {id: 4, name: "Cadbury Dairy Milk Silk Mousse", price: 100, img: "https://m.media-amazon.com/images/I/619N60eVU4L._SX679_.jpg"},
        {id: 5, name: "Cadbury Dairy Milk Silk Bubbly", price: 100, img: "https://m.media-amazon.com/images/I/61QHjsfEixL._SX679_.jpg"},
        {id: 6, name: "Cadbury Rich Cocoa Dark Chocolate", price: 100, img: "https://m.media-amazon.com/images/I/71d3CDrJcdL._SX679_.jpg"},
        {id: 7, name: "Sugar Free D'lite Quinoa & Almonds Dark Chocolate", price: 100, img: "https://m.media-amazon.com/images/I/61zxOHjNRFL._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg"},
        {id: 8, name: "Amul Sugar Free Dark Chocolate", price: 100, img: "https://m.media-amazon.com/images/I/81IBW9geZJL._SX569_.jpg"},
        {id: 9, name: "Cadbury Bournville Fruit and Nut Dark Chocolate", price: 100, img: "https://m.media-amazon.com/images/I/614MLA932SL._SX679_.jpg"},
    ];
    // console.log(chocolates.name);
    return (
        <div className='chocolates-container'>
            {
                chocolates.map(chocolate => <Chocolate onClick={props.onClick} key={chocolate.id} data={chocolate}></Chocolate>)
            }
        </div>
    );
};

export default Chocolates;