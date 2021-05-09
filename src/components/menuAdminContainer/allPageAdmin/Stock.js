import React, {useContext} from 'react';
import {MyContext1} from "./oneContext";
import ModalStock from "./ModalStock";
import "../adminStyle/Stock.css";

export function Stock(props) {
    let context = useContext(MyContext1);
    let isStock = context.stock.length;

    let stock = context.stock.map((item, index) =>
        <tr key={index} onClick={() => context.CreateStock(true, index)}>
            <td>{item.name}</td>
            <td>{item.cols}</td>
            <td>{item.stock}</td>
            <td>{item.price}</td>

        </tr>
    );
    return (
        <div className='Stock'>
            <h1>Admin panel stock product</h1>
            <button className='Stock_button'
                    onClick={() => context.CreateStock(true)}>Create stock product
            </button>
            {context.createStock && <ModalStock/>}

            <table className='Stock_table'>
                <thead>
                <tr>
                    <th colSpan={4}>
                        {isStock ? "Table stock product" : "No stock product"}
                    </th>

                </tr>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Sale</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {stock}
                </tbody>
            </table>

        </div>
    );

}