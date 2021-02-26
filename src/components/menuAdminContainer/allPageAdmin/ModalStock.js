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

    // validation
let [nameValid, setNameValid]=useState(false);
let [quantityValid, setQuantityValid]=useState(false);
let [saleValid, setSaleValid]=useState(false);
let [priceValid, setPriceValid]=useState(false);
let [formValid, setFormValid]=useState(false);
useEffect(()=>{
    setNameValid(/^[a-zA-z][a-z]{2,10}$/.test(name));
    setQuantityValid(/^[1-9][0-9]{0,5}$/.test(quantity));
    setSaleValid(/^[1-9][0-9]?[%]$/.test(sale));
    setPriceValid(/(^[1-9][0-9]{0,5}[.]?([0-9]|[1-9])[0-9]$)|(^[1-9][0-9]{0,5}$)/.test(price));
    setFormValid(nameValid&&quantityValid&&saleValid&&priceValid);
})

    let stockObj={
        name:name,
        cols:quantity,
        stock:sale,
        price:price
    }
    // костыль
if (items && !stockObj.name){ setName(items.name)}
if (items && !stockObj.cols){ setQuantity(items.cols)}
if (items && !stockObj.stock){ setSale(items.stock)}
if (items && !stockObj.price){ setPrice(items.price)}

    return (
        <div className='ModalStock'>
            <h1>{index>=0 ? 'Redactor stock product' : 'Create stock product'}</h1>
            <form action="" className='ModalStock_form'>
                <label htmlFor="name">Name</label>
                {(!nameValid && name.length>0) && <span className='ModalStock-valid_span'>Invalid Name</span>}
                <input type="text" id='name' onChange={e=>setName(e.target.value)}
                defaultValue={index>=0 ? items.name : ''} style={{border:(!nameValid && name.length>0)&& "2px solid red"}}/>
                <label htmlFor="quantity">Quantity</label>
                {(!quantityValid && quantity.length>0) && <span className='ModalStock-valid_span'>Invalid Quantity</span>}
                <input type="text" id='quantity' onChange={e=>setQuantity(e.target.value)}
                defaultValue={index>=0 ? items.cols : ''} style={{border:(!quantityValid && quantity.length>0)&& "2px solid red"}}/>
                <label htmlFor="sale">Sale</label>
                {(!saleValid && sale.length>0) && <span className='ModalStock-valid_span'>Invalid Sale</span>}
                <input type="text" id='sale' onChange={e=>setSale(e.target.value)}
                defaultValue={index>=0 ? items.stock : ''} style={{border:(!saleValid && sale.length>0)&& "2px solid red"}}/>
                <label htmlFor="prise">Price</label>
                { (!priceValid && price.length>0) && <span className='ModalStock-valid_span'>Invalid Price</span>}
                <input type="text" id='prise' onChange={e=>setPrice(e.target.value)}
                defaultValue={index>=0 ? items.price : ''} style={{border:(!priceValid && price.length>0)&& "2px solid red"}}/>
                <div className='ModalStock_button'>
                    <input type="button" value='cancel'
                           onClick={()=>context.CreateStock(false)}/>
                    {
                        index>=0 && <input type="button" value='delete'
                                           onClick={()=>context.DeleteStock(index)}/>
                    }

                    <input type="button" value='save'
                           onClick={()=>context.PushNameStock(stockObj,index)} disabled={!formValid}/>
                </div>
            </form>
        </div>
    );
}

export default ModalStock;