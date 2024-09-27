// for Form implementation //

import { useRef, useState } from "react"
import { IoIosPersonAdd } from "react-icons/io";

const InputTodoItem = ({ addItem }) => {
    // let [inputItem, setInputItem] = useState("");
    // let [inputDate, setInputDate] = useState("");

    // let handleInputItem = (event) => {
    //     setInputItem(event.target.value);
    // }

    // let handleInputDate = (event) => {
    //     setInputDate(event.target.value);
    // }

    // let addButtonEvent = (event) => {
    //     addItem(inputItem, inputDate);
    //     event.preventDefault();
    //     setInputItem("");
    //     setInputDate("");
    // }
    // return <>
    //     <form className="row todo-row" onSubmit={addButtonEvent}>
    //         <div className="col-6">
    //             <input type="text" placeholder='Please enter task' value={inputItem} onChange={handleInputItem}></input>
    //         </div>
    //         <div className="col-3">
    //             <input type='date' placeholder='please select date' value={inputDate} onChange={handleInputDate}></input>
    //         </div>
    //         <div className="col-2">
    //             <button type="submit" className="btn btn-success"><IoIosPersonAdd /></button>
    //         </div>
    //     </form></>


    //==================== using Ref Hookes ============================//
    let inputItem = useRef();
    let inputDate = useRef();

    let addButtonEvent = (event) => {
        event.preventDefault();
        addItem(inputItem.current.value, inputDate.current.value);

        inputItem.current.value = "";
        inputDate.current.value = "";
    }
    return <>
        {/*  <div className="row todo-row">*/}
        <form className="row todo-row" onSubmit={addButtonEvent}>
            <div className="col-6">
                <input type="text" placeholder='Please enter task' ref={inputItem} ></input>
            </div>
            <div className="col-3">
                <input type='datetime-local' placeholder='please select date' ref={inputDate}></input>
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success"><IoIosPersonAdd /></button>
            </div>
        </form>
        {/* </div> */}

    </>
    //========================== End ===================================//
}
export default InputTodoItem;