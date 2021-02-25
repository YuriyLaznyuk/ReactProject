import React from 'react'

export default function UserContainer(props) {
    let lengthProducts=props.products.length;
    let products = props.products.map((item, index) => {
        return (<li key={index}>{item.name}</li>);
    } )
    return(
        <div>
            <ul>
                { lengthProducts?products:
                <li>NO PRODUCTS</li> }
            </ul>

        </div>
    )

}