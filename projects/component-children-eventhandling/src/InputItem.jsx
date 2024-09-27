import style from "./InputItem.module.css"
const InputItem = ({ handleKeyDown }) => {
    return <input type="text" placeholder="Please input food item" className={style.foodInput} onKeyDown={handleKeyDown}></input>
}
export default InputItem;