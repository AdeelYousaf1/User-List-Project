import React from 'react'

import { Link} from 'react-router-dom';  // npm install react-router-dom

export default function SingleItem(props) {
    return (
        <tr>
            <td>
                <input type="checkbox" 
                        onClick={() => props.handleSelection(props.item.id)}
                        style={{transform: "scale(3)"}}/>
            </td>
            <td>
                {props.item.avatar !== '' ?
                        <img src={props.item.avatar} width="75" height="75"/>
                        : 'No image'
                    }
            </td>
            <td>{props.item.firstName}</td>
            <td>{props.item.lastName}</td>
            <td>{props.item.email}</td>
            <td>{props.item.phone}</td>
            <td>{props.item.address}</td>
            <td>
                <button className="btndel" onClick={() => props.singleDelete(props.item.id)}>Delete</button>
                <br/>
                <Link className="editbtn" to={`/edit/${props.item.id}`}>Edit</Link>
            </td>
        </tr>
    )
}
