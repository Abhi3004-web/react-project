import { useContext } from "react";
import { TodoItemContext } from "./store/todo-items-store";

let AddedTodoList = ({ itemName, purchageDate }) => {
    const { onDeleteItem } = useContext(TodoItemContext);
    return <>
        <div className="row todo-row">
            <div className="col-6">
                <label>{itemName}</label>
            </div>
            <div className="col-3">
                <label>{purchageDate}</label>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={() => onDeleteItem(itemName)}>delete</button>
            </div>
        </div></>
}
export default AddedTodoList;