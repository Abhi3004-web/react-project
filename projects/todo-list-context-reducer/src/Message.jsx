import { useContext } from "react";
import { TodoItemContext } from './store/todo-items-store'

let Message = () => {
    const { todoItems } = useContext(TodoItemContext);
    return <>
        {todoItems.length === 0 && <center>Enjoy your day</center>}
    </>
}
export default Message;