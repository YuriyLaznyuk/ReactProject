import React, {Component} from 'react';
import {AdminMainMenu} from "./menuAdminContainer/AdminMainMenu";
import {AdminLayoutContainer} from "./menuAdminContainer/AdminLayoutContainer";
import {MyContext1} from "./menuAdminContainer/allPageAdmin/oneContext";

class AdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutAdmin: '',
            createProduct: false,
            createCustomer: false,
            createOrders: false,
            createStock: false,
            products: [],
            customers: [],
            orders: [],
            stock: [],
            liIndex: '',
            customerIndex: '',
            orderIndex: '',
            stockIndex: ''

        };
        this.onChangeAdminMenu = this.onChangeAdminMenu.bind(this);

    }

    onChangeAdminMenu(layoutAdmin) {
        this.setState({
            layoutAdmin: layoutAdmin
        });
    }

// ==PRODUCT METHOD==
    onDeleteProduct = (index) => {
        this.prdelete = this.state.products;
        this.prdelete.splice(index, 1);
        this.setState({
            products: this.prdelete,
            createProduct: false,
        });

    };

    onPushNameProduct = (nameProduct, index) => {
        this.prpush = this.state.products;
        if (index >= 0) {
            this.prpush[index] = nameProduct;
            this.setState({products: this.prpush});

        } else {
            this.prpush.push(nameProduct);
            this.setState({products: this.prpush});
        }
        this.setState({createProduct: false});
        console.log(this.state.products);

    };

    onCreateProduct = (stateProduct, index) => {
        this.setState({createProduct: stateProduct});
        this.setState({liIndex: index});
    };

// ==CUSTOMER METHOD==

    onCreateCustomer = (stateCustomer, index) => {
        this.setState({
            createCustomer: stateCustomer,
            customerIndex: index
        });

    };

    onPushNameCustomer = (nameCustomer, index) => {
        let newCustomers = this.state.customers;
        if (index >= 0) {
            newCustomers[index] = nameCustomer;
            this.setState({customers: newCustomers});

        } else {
            newCustomers.push(nameCustomer);
            this.setState({customers: newCustomers});
        }
        this.setState({createCustomer: false});
    };

    onDeleteCustomer = (index) => {
        this.newCustomers = this.state.customers;
        this.newCustomers.splice(index, 1);
        this.setState({
            customers: this.newCustomers,

        });
        this.setState({
            createCustomer: false
        });
    };

// ==ORDERS METHOD==
    onCreateOrder = (stateOrder, index) => {
        this.setState({
            createOrders: stateOrder,
            orderIndex: index
        });
    };

    onPushNameOrder = (order, index) => {
        let newOrders = this.state.orders;
        if (index >= 0) {
            newOrders[index] = order;
            this.setState({
                orders: newOrders,
                createOrders: false
            });
        } else {
            newOrders.push(order);
            this.setState({
                orders: newOrders,
                createOrders: false
            });
        }
    };

    onDeleteOrder = (index) => {
        let newOrder = this.state.orders;
        newOrder.splice(index, 1);
        this.setState({
            orders: newOrder,
            createOrders: false
        });

    };

// ==STOCK METHOD==
    onCreateStock = (stock, index) => {
        this.setState({
            createStock: stock,
            stockIndex: index
        });
    };

    onPushNameStock = (items, index) => {
        let stockNew = this.state.stock;
        if (index >= 0) {
            stockNew[index] = items;
            this.setState({
                stock: stockNew,
                createStock: false
            });
        } else {
            stockNew.push(items);
            this.setState({
                stock: stockNew,
                createStock: false
            });
        }
    };
    onDeleteNameStock = (index) => {
        let stockNew = this.state.stock;
        stockNew.splice(index, 1);
        this.setState({
            stock: stockNew,
            createStock: false
        });
    };

    render() {
        console.log(this.state.products + " AdminContainer");
        console.log(this.state.customers);

        return (
            <div>
                <AdminMainMenu layoutAdmin={this.state.layoutAdmin}
                               onChangeAdminMenu={this.onChangeAdminMenu}/>

                <MyContext1.Provider value={
                    {
                        myCont: 'это мой контекст',

                        createOrders: this.state.createOrders,
                        orders: this.state.orders,
                        orderIndex: this.state.orderIndex,
                        CreateOrder: this.onCreateOrder,
                        PushNameOrder: this.onPushNameOrder,
                        DeleteOrder: this.onDeleteOrder,

                        stock: this.state.stock,
                        createStock: this.state.createStock,
                        stockIndex: this.state.stockIndex,
                        CreateStock: this.onCreateStock,
                        PushNameStock: this.onPushNameStock,
                        DeleteStock: this.onDeleteNameStock

                    }
                }>

                    <AdminLayoutContainer
                        componentAdmin={this.state.layoutAdmin}
                        products={this.state.products} customers={this.state.customers}
                        orders={this.state.orders} stock={this.state.stock}
                        onCreateProduct={this.onCreateProduct}
                        createProduct={this.state.createProduct}
                        liIndex={this.state.liIndex}
                        onPushNameProduct={this.onPushNameProduct}
                        onDeleteProduct={this.onDeleteProduct}

                        onCreateCustomer={this.onCreateCustomer}
                        customerIndex={this.state.customerIndex}
                        createCustomer={this.state.createCustomer}
                        onPushNameCustomer={this.onPushNameCustomer}
                        onDeleteCustomer={this.onDeleteCustomer}/>


                </MyContext1.Provider>


            </div>
        );
    }
}

export default AdminContainer;