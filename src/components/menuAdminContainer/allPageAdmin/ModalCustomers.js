import React,{useState,useEffect,useContext} from 'react';
import '../adminStyle/ModalCustomers.css'
import {MyContext1} from "./oneContext";

function ModalCustomers(props) {
    let context=useContext(MyContext1)
    let customer={};
    let[name,setName]=useState('');
    let[tel,setTel]=useState('');
    let[email,setEmail]=useState('');
    // валидация полей
    let[nameValid, setNameValid]=useState(false);
    let[telValid, setTelValid]=useState(false);
    let[emailValid, setEmailValid]=useState(false);
    let[formValid, setFormValid]=useState(false);
    function validName(value){
    setNameValid(/[a-z]{3,7}/.test(value));

    }
   useEffect(()=>{
       // validName(name)
    setNameValid(/[a-z]{3,7}/.test(name));
    setTelValid(/\d{7,10}/.test(tel));
    setEmailValid(/^[\w-\\.\d*]+@[\w\d]+(\.\w{2,4})$/.test(email));
    setFormValid(nameValid&&telValid&&emailValid);
   })



    customer={
        name:name,
        tel:tel,
        email:email
    }

let index=props.customerIndex>=0;
let customObj=props.customers[props.customerIndex];


    console.log(customer)
    console.log(props.customerIndex)

 // если поле не редактировать при дефолтном значении
        if(customObj&&!customer.name){customer.name=customObj.name}
        if(customObj&&!customer.tel){customer.tel=customObj.tel}
        if(customObj&&!customer.email){customer.email=customObj.email}



    return (

        <div className={'ModalCreate'}>
            <h1>{index ? 'Modal Redactor Customers' : 'Modal Create Customers'}</h1>
            <form className='ModalCreate_form' action="">

                <label htmlFor="name">NAME</label>
                <span className='valid'>{(name.length>0&&!nameValid)&&'Invalid Name'}</span>
                <input type="text" onChange={e=>setName(e.target.value)}
                       style= {{border:(name.length>0&&!nameValid)&&"2px solid red"}}
                       name='name'  id='name' defaultValue={index?customObj.name:''}/>

                <label htmlFor="tel">Tel</label>
                <span className='valid'>{(tel.length>0&&!telValid)&&'Invalid Tel'}</span>
                <input type="text" onChange={e=>setTel(e.target.value)}
                       style= {{border:(tel.length>0&&!telValid)&&"2px solid red"}}
                       name='tel'  id='tel' defaultValue={index?customObj.tel:''}/>

                <label htmlFor="email">Email</label>
                <span className='valid'>{(email.length>0&&!emailValid)&&'Invalid Email'}</span>
                <input type="text" onChange={e=>setEmail(e.target.value)}
                       style= {{border:(email.length>0&&!emailValid)&&"2px solid red"}}
                       name='email'  id='email' defaultValue={index?customObj.email:''} />

                <div className={'block_button'}>
                <input value='cancel' type="button"
                       onClick={()=>props.onCreateCustomer(false)}/>

                    {index&&
                <input value='delete' type="button"
                onClick={()=>props.onDeleteCustomer(props.customerIndex)}
                /> }

                <input value='save' type="button"
                onClick={()=>props.onPushNameCustomer(customer,props.customerIndex)}
                disabled={!formValid}/>

                </div>
            </form>
        </div>
    );
}

export default ModalCustomers;