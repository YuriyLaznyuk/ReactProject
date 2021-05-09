import React from "react";
import './adminStyle/AdminMainMenu.css';

export function AdminMainMenu(props) {
    let {layoutAdmin} = props;
    return (
        <ul className='AdminMainMenu_ul'>
            <li className={layoutAdmin === 'products' ? 'admin_red' : 'admin_blue'}
                onClick={() => props.onChangeAdminMenu('products')}>Products
            </li>
            <li className={layoutAdmin === 'customers' ? 'admin_red' : 'admin_blue'}
                onClick={() => props.onChangeAdminMenu('customers')}>Customers
            </li>
            <li className={layoutAdmin === 'orders' ? 'admin_red' : 'admin_blue'}
                onClick={() => props.onChangeAdminMenu('orders')}>Orders
            </li>
            <li className={layoutAdmin === 'stock' ? 'admin_red' : 'admin_blue'}
                onClick={() => props.onChangeAdminMenu('stock')}>Stock
            </li>
        </ul>
    );

}