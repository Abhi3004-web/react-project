import AddedTodoItems from "./AddedTodoItems";
let AddedItems = ({ TodoItems }) => {
    return <>
        {TodoItems.map((items) => (
            <AddedTodoItems itemname={items.itemName} itemdate={items.purchageDate}></AddedTodoItems>
        ))};
    </>
}
export default AddedItems;