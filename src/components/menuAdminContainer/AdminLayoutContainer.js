import React from 'react';
import {Products} from "./allPageAdmin/Products";
import {Customers} from "./allPageAdmin/Customers";
import {Orders} from "./allPageAdmin/Orders";
import {Stock} from "./allPageAdmin/Stock";


export function AdminLayoutContainer(props) {
    const {
        componentAdmin, products, customers, orders, stock,
        onCreateProduct, onPushNameProduct, createProduct, liIndex
        , onDeleteProduct,customerIndex,onCreateCustomer,createCustomer,
        onDeleteCustomer,onPushNameCustomer
    } = props;
    let productsLs = [];

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        productsLs.push(JSON.parse(localStorage.getItem(key)))

        console.log(localStorage.getItem(key))

    }
    console.log(productsLs)

    let component = null;
    switch (componentAdmin) {
        case 'products':
            component = <Products products={products} onCreateProduct={onCreateProduct}
             onPushNameProduct={onPushNameProduct} createProduct={createProduct} liIndex={liIndex}
             onDeleteProduct={onDeleteProduct} productslS={productsLs}/>;
            break;

        case 'customers':
            component = <Customers customers={customers}
            customerIndex={customerIndex} onCreateCustomer={onCreateCustomer}
            onDeleteCustomer={onDeleteCustomer} onPushNameCustomer={onPushNameCustomer}
            createCustomer={createCustomer}/>;
            break;

        case 'orders':
            component = <Orders orders={orders}/>
            break;

        case 'stock':
            component = <Stock stock={stock}/>
            break;

        default:
            component = <div>Ku-Ku</div>

    }
    return (
        <div>
            {component}
        </div>
    )
}