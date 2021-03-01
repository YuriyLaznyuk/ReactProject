import './App.css';
import React, {Component} from 'react';
import {MainMenu} from "./components/MainMenu";
import {BrowserRouter} from "react-router-dom";

class App extends Component {


    render() {

        return (
            <BrowserRouter>
                <MainMenu

                />

            </BrowserRouter>
        );
    }
}

export default App;