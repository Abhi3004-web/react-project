import style from "./InputNumber.module.css"
const InputNumber = ({ displayValue }) => {
    return <input type="text" className={style.inputBox} placeholder="0" value={displayValue}></input>
}
export default InputNumber;