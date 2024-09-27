import { useRef, useContext } from "react"
import { IoIosPersonAdd } from "react-icons/io";
import { TodoItemContext } from "./store/todo-items-store";


const InputItem = () => {
    const { onAddClick } = useContext(TodoItemContext);

    let inputItem = useRef();
    let inputDate = useRef();

    let addButtonEvent = () => {

        onAddClick(inputItem.current.value, inputDate.current.value);
        inputItem.current.value = "";
        inputDate.current.value = "";
    }

    return <>
        <div className="row todo-row">
            <div className="col-6">
                <input type="text" placeholder='Please enter task' ref={inputItem}></input>
            </div>
            <div className="col-3">
                <input type='date' placeholder='please select date' ref={inputDate} ></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success" onClick={addButtonEvent}><IoIosPersonAdd /></button>
            </div>
        </div>
    </>
}
export default InputItem