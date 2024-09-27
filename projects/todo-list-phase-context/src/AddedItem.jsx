import { useContext } from "react";
import AddedTodoList from "./AddedTodoList";
import { TodoItemsData } from "./store/todo-items-store";

let AddedItem = () => {
    const addedItemsObj = useContext(TodoItemsData);
    const addedItems = addedItemsObj.todoItems;


    return <>
        {addedItems.map(items => (
            <AddedTodoList key={items.itemName} itemName={items.itemName} purchageDate={items.purchageDate} ></AddedTodoList>
        ))}
    </>
}
export default AddedItem;