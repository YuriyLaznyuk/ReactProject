import './App.css';
import React, {Component} from 'react';
import {MainMenu} from "./components/MainMenu";
import LayoutContainer from "./components/LayoutContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: '',
            products: [],
        }
    }

    onChangeLayout = (layout) => {
        this.setState({
            layout: layout
        });
    }

    render() {

        return (
            <div>
                <MainMenu
                    onChangeLayout={this.onChangeLayout}
                    layout={this.state.layout}
                />
                <LayoutContainer
                    layout={this.state.layout}
                    products={this.state.products}
                />
            </div>
        );
    }
}

export default App;