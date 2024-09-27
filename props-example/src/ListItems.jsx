import Item from "./Item";
let ListIteams = ({ items }) => {
    return (
        <ul className="list-group">
            {items.map((index) => (
                <Item key={index} item={index}></Item>
            )
            )}
        </ul>
    );
}
export default ListIteams;