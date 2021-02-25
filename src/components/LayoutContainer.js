import React from 'react'
import AdminContainer from "./AdminContainer";
import UserContainer from "./UserContainer";

export default function LayoutContainer(props) {
    let component = null;
    switch (props.layout) {
        case 'admin':
            component = <AdminContainer/>;
            break;
        case 'user':
            component = <UserContainer products={props.products}/>;
            break;
        case 'container1':
            component = <div>
                container1
            </div>;
            break;
        case 'container2':
            component = <div>
                container2
            </div>;
            break;
        default:
            component = <div>
                default
            </div>
    }

    return (
        <div>
            {component}
        </div>
    )

}