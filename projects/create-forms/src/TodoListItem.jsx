import TodoItems from "./TodoItems";

const TodoListItem = ({ todoListItem, deleteItem }) => {
    return <>
        {
            todoListItem.map(items => (
                <TodoItems key={items.itemName} ItemName={items.itemName} PurchageDate={items.purchageDate} DeleteData={deleteItem}></TodoItems>
            ))
        }
    </>
}
export default TodoListItem;