import React,{useState} from 'react';
import '../adminStyle/Customers.css'
import ModalCustomers from "./ModalCustomers";

export function Customers(props) {

 let customer=props.customers.map((item,index)=>
     <tr key={index} onClick={()=>props.onCreateCustomer(true,index)}>
 <td >{item.name}</td>
 <td> {item.tel}</td>
 <td >{item.email}</td>
     </tr>
 )
    return(
        <div className={'Customers'}>
            <h1>Customer</h1>
            <button className={'btn_Customers'}
                    onClick={()=>props.onCreateCustomer(true)}
            >Create Customer</button>
            {props.createCustomer&&<ModalCustomers customers={props.customers}
            onCreateCustomer={props.onCreateCustomer} customerIndex={props.customerIndex}
            onDeleteCustomer={props.onDeleteCustomer} onPushNameCustomer={props.onPushNameCustomer}
            />}

            <table className={'table_Customers'}>
               <thead>
               <tr>
                   <th colSpan='3'>{props.customers.length
                   ? "Table Customers" : 'NO Customers'}</th>
               </tr>
               <tr>
                   <th>NAME</th>
                   <th>Tel</th>
                   <th>Email</th>
               </tr>
               </thead>
                <tbody>

                {customer}
                </tbody>

            </table>
        </div>
    )

}