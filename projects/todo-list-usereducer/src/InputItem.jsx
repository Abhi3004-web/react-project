import { useState } from "react"
import { IoIosPersonAdd } from "react-icons/io";



const InputItem = ({ addItem }) => {
    let [inputItem, setInputItem] = useState("");
    let [inputDate, setInputDate] = useState("");
    
    let handleInputItem = (event) => {
        setInputItem(event.target.value);
    }

    let handleInputDate = (event) => {
        setInputDate(event.target.value);
    }

    let addButtonEvent = () => {
        addItem(inputItem, inputDate);
        setInputItem("");
        setInputDate("");
    }

    return <>
        <div className="row todo-row">
            <div className="col-6">
                <input type="text" placeholder='Please enter task' value={inputItem} onChange={handleInputItem}></input>
            </div>
            <div className="col-3">
                <input type='date' placeholder='please select date' value={inputDate} onChange={handleInputDate}></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success" onClick={addButtonEvent}><IoIosPersonAdd /></button>
            </div>
        </div>
    </>
}
export default InputItem