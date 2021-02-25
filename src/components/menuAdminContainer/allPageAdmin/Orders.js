import React,{useContext} from 'react';
import {MyContext1} from "./oneContext";
import '../adminStyle/Orders.css'
import ModalOrders from "./ModalOrders";

export function Orders(props) {
    let context=useContext(MyContext1);
    let order=context.orders.map((item,index)=>
    <tr key={index} onClick={()=>context.CreateOrder(true,index)}>
        <td>{item.name}</td>
        <td>{item.cols}</td>
        <td>{item.price}</td>
    </tr>)

    return (
        <div className='Orders'>
            {context.createOrders&&<ModalOrders/>}
            <h1>Orders Panel Control</h1>
            <button className='btn_Orders'
                    onClick={()=>context.CreateOrder(true)}>
                Create Order</button>
            <table className='table_Orders'>
                <thead>
                <tr><th colSpan='3'>
                    {context.orders.length>0 ? 'Table Orders' : 'No Orders'}
                </th></tr>
                <tr>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {order}
                </tbody>
            </table>
        </div>
    );
}

