import React from "react";

function Child({ name, email, city, deleteRow }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td><button onClick={deleteRow}>Delete Row</button></td>
        </tr>
    )
}

export default Child;