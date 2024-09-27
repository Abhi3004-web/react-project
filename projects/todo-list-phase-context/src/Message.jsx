import { useContext } from "react";
import { TodoItemsData } from "./store/todo-items-store";

let Message = () => {
    const addedItemsObj = useContext(TodoItemsData);
    const addedItems = addedItemsObj.todoItems;
    return <>
        {addedItems.length === 0 && <center>Enjoy your day</center>}
    </>
}
export default Message;