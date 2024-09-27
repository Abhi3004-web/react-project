import style from './InputButton.module.css'
const InputButton = ({ inputBtn, onbuttonclick }) => {
    return <div className={style.buttonContainer}>
        {inputBtn.map(item => (
            <button className={style.button} onClick={() => onbuttonclick(item)}>{item}</button>
        ))}
    </div>
};
export default InputButton;