import React,{useContext,useEffect,useState} from 'react';
import {MyContext1} from "./oneContext";
import '../adminStyle/ModalStock.css'

function ModalStock(props) {
    let context=useContext(MyContext1)
    return (
        <div className='ModalStock'>
            <form action="" className='ModalStock_form'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id='quantity'/>
                <label htmlFor="sale">Sale</label>
                <input type="text" id='sale'/>
                <label htmlFor="prise">Price</label>
                <input type="text" id='prise'/>
                <div className='ModalStock_button'>
                    <input type="button" value='cancel'
                           onClick={()=>context.CreateStock(false)}/>
                    <input type="button" value='delete'/>
                    <input type="button" value='save'/>
                </div>
            </form>
        </div>
    );
}

export default ModalStock;