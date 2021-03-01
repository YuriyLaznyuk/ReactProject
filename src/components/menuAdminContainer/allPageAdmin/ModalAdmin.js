import React, {Component} from 'react';
import '../adminStyle/ModalAdmin.css'
// import {MyContext1} from "./oneContext";

class ModalAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          unit:'',
          price:'',
            nameValid:false,
            unitValid:false,
            priceValid:false,
            formValid:false
        }


        this.product = {};
    }
// static contextType=MyContext1

    onValueChange = (e) => {
        let name=e.target.name;
        let value=e.target.value;
        this.product[name] = value;
        this.setState({
            [name]:value
        },()=>this.onValidProduct(name,value));

    }
onValidProduct=(name,value)=>{
        let nameValid= this.state.nameValid;
        let unitValid= this.state.unitValid;
        let priceValid= this.state.priceValid;
        switch (name) {
            case "name":
                nameValid=value.length>=3;
                break;
            case "unit" :
                unitValid=value.length>=3;
                break;
            case "price" :
                priceValid=value.length>=3;
                break;

        }
    this.setState({
        nameValid: nameValid,
        unitValid: unitValid,
        priceValid: priceValid,
    },this.onValidForm);

}
onValidForm=()=>{
    this.setState({formValid: this.state.priceValid&&
            this.state.unitValid&& this.state.nameValid});
}
    pushLS = (product) => {
        let jsonProduct = JSON.stringify(product);
        localStorage.setItem(product.name, jsonProduct)

    }
    validStyle=(name,nameValid)=>{
        return this.state[name].length>0 && !this.state[nameValid]
    }


    render() {

        // костыль
        let items='';
        if (this.props.liIndex>=0){
         items = this.props.products[this.props.liIndex];

        }



        if (items && !this.product.name) {
            this.product.name = items['name'];
            this.setState({nameValid:items['name'].length>=3,
            name:items['name'],
            formValid:true});
        }
        if (items && !this.product.unit) {
            this.product.unit = items['unit'];
            this.setState({unitValid:items['unit'].length>=3,
            unit:items['unit'],
                formValid:true});
        }

        if (items && !this.product.price) {
            this.product.price = items['price'];
            this.setState({priceValid:items['price'].length>=3,
                    price:items['price'],
                    formValid:true}
                );
        }



        return (
            <div className='ModalAdmin'
                 style={this.props.createProduct ? {display: 'flex'} : {display: 'none'}}>
                <h2>{items && "Admin panel redactor products"} {!items && 'Admin panel create products'}</h2>
                <form action="">
                    <label className='ModalAdmin_label' htmlFor="name">Name</label>
                    {<span className='invalid'
                           style={{opacity:(this.validStyle('name','nameValid'))?1:0}}>Field Name invalid</span>}
                    <input className='ModalAdmin_text' type="text" id='name' name='name'
                           style={{border:this.validStyle('name','nameValid') && '2px solid red'}}
                           defaultValue={items ? items['name'] : ''}
                           onChange={(e) => this.onValueChange(e)}

                    />

                    <br/>

                    <label className='ModalAdmin_label' htmlFor="unit">Unit</label>
                    {<span className='invalid'
                           style={{opacity:(this.validStyle('unit','unitValid'))?1:0}}>Field Unit invalid</span>}
                    <input className='ModalAdmin_text' type="text" id='unit' name='unit'
                           style={{border:this.validStyle('unit','unitValid') && '2px solid red'}}
                           defaultValue={items ? items['unit'] : ''}
                           onChange={e => this.onValueChange(e)}/>
                    <br/>

                    <label className='ModalAdmin_label' htmlFor="price">Price</label>
                    {<span className='invalid'
                           style={{opacity:(this.validStyle('price','priceValid'))?1:0}}>Field Price invalid</span>}
                    <input className='ModalAdmin_text' type="text" id='price' name='price'
                           style={{border:(this.validStyle('price','priceValid')) && '2px solid red'}}
                           defaultValue={items ? items['price']: ''}
                           onChange={e => this.onValueChange(e)}
                    />

                    <br/>
                    <div className="ModalAdmin_btnBlock">
                        <input type="reset" value='Cancel'
                               onClick={() => this.props.onCreateProduct(false)}/>
                        {items && <input type="reset" value='Delete'
                                         onClick={()=>this.props.onDeleteProduct(this.props.liIndex)}/>}
                        <input type="button" value='Save' disabled={!this.state.formValid}
                               onClick={() => this.props.onPushNameProduct(this.product, this.props.liIndex)}/>
                        {/*<input type="button" value='create' onClick={()=>this.pushLS(product)}/>*/}
                    </div>


                </form>


            </div>
        );
    }
}

export default ModalAdmin;
