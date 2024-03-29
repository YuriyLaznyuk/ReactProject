import React from 'react';
import './MainMenu.css';
import {Link, Route, useRouteMatch, Switch} from 'react-router-dom';
import AdminContainer from "./AdminContainer";
import UserContainer from "./UserContainer";
import Login from "./privateRouteLogin/Login";
import PrivateRoute from "./privateRouteLogin/PrivateRoute";

export function MainMenu(props) {
    return (
        <div>
            <ul className='MainMenu_ul'>
                <li className={useRouteMatch("/admin") ? 'red' : "blue"}>

                    <Link to='/admin' >
                        Admin
                    </Link>
                </li>

                <li className= 'blue'>

                    <Link to='/' exact>
                        UserContainer
                    </Link>
                </li>

                <li className={useRouteMatch("/container1") ? 'red' : 'blue'}>

                    <Link to='/container1' >
                        Container 1
                    </Link>
                </li>

                <li className={useRouteMatch("/container2") ? 'red' : 'blue'}>

                    <Link to='/container2' >
                        Container 2
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'><UserContainer/></Route>
                <Route path='/container1'><h1>Container 1</h1></Route>
                <Route path='/container2'><h1>Container 2</h1></Route>
                <Route path="/login"><Login/></Route>
                <PrivateRoute path="/admin" component={AdminContainer}/>

            </Switch>
        </div>
    );

}