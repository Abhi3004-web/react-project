import Item from "./Item";
import { useState } from 'react'

const ItemsList = ({ items }) => {
    let [activeItems, setActiveItems] = useState([]);
    const handlebuyButton = (item, event) => {
        console.log(activeItems.length);
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }
    return <ul className="list-group">
        {items.map((item) => (
            <Item key={item} ItemData={item} bought={activeItems.includes(item)} handleBuyButton={(event) => handlebuyButton(item, event)}></Item>
        ))}
    </ul>
}
export default ItemsList;