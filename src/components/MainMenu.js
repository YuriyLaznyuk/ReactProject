import React from 'react';
import './MainMenu.css'

export function MainMenu(props) {
    const { onChangeLayout, layout } = props;

    return (
        <ul className='MainMenu_ul'>
            <li
                className={layout==="admin" ? 'red' : "blue"}
                onClick={() => onChangeLayout('admin')}>Admin
            </li>
            <li
                className={layout==="user" ? 'red' : 'blue'}
                onClick={() => onChangeLayout('user')}>UserContainer
            </li>
            <li
                className={layout==="container1" ? 'red' : 'blue'}
                onClick={() => onChangeLayout('container1')}>Container 1
            </li>
            <li
                className={layout==="container2" ? 'red' : 'blue'}
                onClick={() => onChangeLayout('container2')}>Container 2
            </li>
        </ul>
    )
}