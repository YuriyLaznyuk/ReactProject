import React,{useContext,useEffect,useState} from 'react';
import {MyContext1} from "./oneContext";
import '../adminStyle/ModalStock.css'

function ModalStock(props) {
    let context=useContext(MyContext1)
    let index=context.stockIndex;
    let items=context.stock[index]
    let[name,setName]=useState('')
    let[quantity,setQuantity]=useState('')
    let[sale,setSale]=useState('')
    let[price,setPrice]=useState('')

    let stockObj={
        name:name,
        cols:quantity,
        stock:sale,
        price:price
    }
    // костыль
if (items && !stockObj.name){stockObj.name=items.name}
if (items && !stockObj.cols){stockObj.cols=items.cols}
if (items && !stockObj.stock){stockObj.stock=items.stock}
if (items && !stockObj.price){stockObj.price=items.price}

    return (
        <div className='ModalStock'>
            <h1>{index>=0 ? 'Redactor stock product' : 'Create stock product'}</h1>
            <form action="" className='ModalStock_form'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' onChange={e=>setName(e.target.value)}
                defaultValue={index>=0 ? items.name : ''}/>
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id='quantity' onChange={e=>setQuantity(e.target.value)}
                defaultValue={index>=0 ? items.cols : ''}/>
                <label htmlFor="sale">Sale</label>
                <input type="text" id='sale' onChange={e=>setSale(e.target.value)}
                defaultValue={index>=0 ? items.stock : ''}/>
                <label htmlFor="prise">Price</label>
                <input type="text" id='prise' onChange={e=>setPrice(e.target.value)}
                defaultValue={index>=0 ? items.price : ''}/>
                <div className='ModalStock_button'>
                    <input type="button" value='cancel'
                           onClick={()=>context.CreateStock(false)}/>
                    {
                        index>=0 && <input type="button" value='delete'
                                           onClick={()=>context.DeleteStock(index)}/>
                    }

                    <input type="button" value='save'
                           onClick={()=>context.PushNameStock(stockObj,index)}/>
                </div>
            </form>
        </div>
    );
}

export default ModalStock;