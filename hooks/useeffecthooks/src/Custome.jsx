import React, { useEffect, useState } from 'react';

export function App1(url) {
    const todos = [
        { id: 1, FName: 'James', LName: 'Smith' },
        { id: 2, FName: 'Michael', LName: 'Smith' },
        { id: 3, FName: 'Robert', LName: 'Smith' },
    ];
    let [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let response = await fetch(url);
            let getData = await response.json();
            console.log(getData);
            setData(getData);
        }
        fetchData();
    }, [url]);
    return { data }
}

export default function Custome() {
    let { data } = App1('https://jsonplaceholder.typicode.com/todos');
    return (
        <div>
            <h3> we got Data</h3>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {' '}
                        id : {item.id} -- title : {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

