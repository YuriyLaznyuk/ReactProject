import React, {useContext, useEffect, useState} from 'react';
import '../adminStyle/ModalOrders.css';
import {MyContext1} from "./oneContext";

function ModalOrders(props) {
    let context = useContext(MyContext1);
    let index = context.orderIndex;
    let items = context.orders[index];

    let [name, setName] = useState('');
    let [quantity, setQuantity] = useState('');
    let [price, setPrice] = useState('');
    let order = {
        name: name,
        cols: quantity,
        price: price
    };
    // validation field
    let [nameValid, setNameValid] = useState(false);
    let [quantityValid, setQuantityValid] = useState(false);
    let [priceValid, setPriceValid] = useState(false);
    let [formValid, setFormValid] = useState(false);
    useEffect(() => {

        setNameValid(/^[A-Za-z][a-z]{2,8}$/.test(name));
        setQuantityValid(/^[1-9]\d{0,3}$/.test(quantity));
        setPriceValid(/^[1-9]+[,]?([0-9]|[1-9])?[1-9]$/.test(price));
        setFormValid(nameValid && quantityValid && priceValid);

    }, [name, quantity, price, nameValid, quantityValid, priceValid]);
    // костыль
    if (items && !order.name) {
        order.name = items.name;
        setName(items.name);
    }
    if (items && !order.cols) {
        setQuantity(items.cols);
    }
    if (items && !order.price) {
        setPrice(items.price);
    }

    return (
        <div className='ModalOrders'>
            <h1>{index >= 0 ? 'Panel Redactor Orders' : 'Panel Create Orders'}</h1>
            <form className='ModalOrders_form' action="">
                <label htmlFor="name">Name</label>
                <span className={'valid'}>{(!nameValid && name.length > 0) && 'Name no valid'}</span>
                <input type="text" id='name' onChange={(e) => setName(e.target.value)}
                       name='name' defaultValue={index >= 0 ? items.name : ''}
                       style={{border: (!nameValid && name.length > 0) && '2px solid red'}}/>

                <label htmlFor="quantity">Quantity </label>
                {(!quantityValid && quantity.length > 0) && <span className={'valid'}>Quantity no Valid</span>}
                <input type="text" id='quantity' onChange={(e) => setQuantity(e.target.value)}
                       name='quantity' defaultValue={index >= 0 ? items.cols : ''}
                       style={{border: (!quantityValid && quantity.length > 0) && '2px solid red'}}/>

                <label htmlFor="price">Price</label>
                {(!priceValid && price.length > 0) && <span className={'valid'}>Price no valid</span>}
                <input type="text" id='price' onChange={(e) => setPrice(e.target.value)}
                       name='price' defaultValue={index >= 0 ? items.price : ""}
                       style={{border: (!priceValid && price.length > 0) && '2px solid red'}}/>

                <div className='block_button'>
                    <input type="button" value='cancel'
                           onClick={() => context.CreateOrder(false)}/>
                    {index >= 0 && <input type="button" value='delete'
                                          onClick={() => context.DeleteOrder(index)}/>}

                    <input type="button" value='save'
                           onClick={() => context.PushNameOrder(order, index)}
                           disabled={!formValid}/>
                </div>
            </form>

        </div>
    );
}

export default ModalOrders;