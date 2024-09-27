import AddedTodoList from "./AddedTodoList";

let AddedItem = ({ addedItems, onDeleteItem }) => {
    return <>
        {addedItems.map(items => (
            <AddedTodoList key={items.itemName} itemName={items.itemName} purchageDate={items.purchageDate} onDeleteItem={onDeleteItem}></AddedTodoList>
        ))}
    </>
}
export default AddedItem;