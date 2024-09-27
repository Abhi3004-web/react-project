import Item from "./Item";

const ItemsList = ({ items }) => {
    return <ul className="list-group">
        {items.map((item) => (
            <Item key={item} ItemData={item}></Item>

        ))}
    </ul>
}
export default ItemsList;