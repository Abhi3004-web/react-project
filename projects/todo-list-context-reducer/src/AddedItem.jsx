import AddedTodoList from "./AddedTodoList";
import { useContext } from "react";
import { TodoItemContext } from "./store/todo-items-store";

let AddedItem = () => {
    const { todoItems } = useContext(TodoItemContext);
    return <>
        {todoItems.map(items => (
            <AddedTodoList key={items.itemName} itemName={items.itemName} purchageDate={items.purchageDate} ></AddedTodoList>
        ))}
    </>
}
export default AddedItem;