import { useRef } from "react"
import { IoIosPersonAdd } from "react-icons/io";



const InputItem = ({ addItem }) => {
    const inputItemName = useRef();
    const inputItemDate = useRef();



    let addButtonEvent = () => {
        const inputItem = inputItemName.current.value;
        const inputDate = inputItemDate.current.value;
        inputItemName.current.value = "";
        inputItemDate.current.value = "";
        addItem(inputItem, inputDate);
    }

    return <>
        <div className="row todo-row">
            <div className="col-6">
                <input type="text" placeholder='Please enter task' ref={inputItemName}></input>
            </div>
            <div className="col-3">
                <input type='date' placeholder='please select date' ref={inputItemDate}></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success" onClick={addButtonEvent}><IoIosPersonAdd /></button>
            </div>
        </div>
    </>
}
export default InputItem