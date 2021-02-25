import React,{useContext} from 'react';
import ModalAdmin from "./ModalAdmin";
import '../adminStyle/Products.css'
import {MyContext1} from "./oneContext";


export function Products(props) {
    let productsLength=props.products.length
    let context=useContext(MyContext1)
    console.log(props.productslS)
  let product=props.products.map((item,index)=>
  <tr key={index} onClick={()=>props.onCreateProduct(true,index)}>
      <td>{item.name}</td>
      <td>{item.unit}</td>
      <td>{item.price}</td>

  </tr>)
    return(
        <div className='Products'>
            <h1>Product control panel</h1>
            <p>
                <button className='btn-create' onClick={()=>props.onCreateProduct(true)}>create product</button>
            </p>

                {props.createProduct&&<ModalAdmin
            onPushNameProduct={props.onPushNameProduct}
                createProduct={props.createProduct}
            onCreateProduct={props.onCreateProduct}
            liIndex={props.liIndex}
            products={props.products}
            onDeleteProduct={props.onDeleteProduct}
                />}


            <table className='Products_table'>
                <thead>
                <tr><th className='th_head' colSpan='3'>{productsLength===0 ? 'No products' : 'Table Products' }</th></tr>
                <tr className='thead-tr'>
                    <th>name</th>
                    <th>unit</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {product}

                </tbody>

            </table>
        </div>
    )

}