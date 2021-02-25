import React from 'react';

export function Stock(props) {
        let stock=props.stock.map((item,index)=>
        <li key={index}>{item}</li>)
    return(
        <div>
            <h1>Stock</h1>
            <ul>
                {props.stock.length ?
                stock : 'NO STOCK STOCK'}
            </ul>
        </div>
    )

}