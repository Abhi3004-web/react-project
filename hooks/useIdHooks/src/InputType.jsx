import { useId } from "react";

function InputType({label, type}){
    let id=useId();
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id}/>
        </>
    )
}
export default InputType;