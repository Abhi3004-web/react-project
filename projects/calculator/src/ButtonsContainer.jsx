import style from "./ButtonsContainer.module.css"
const ButtonsContainer = ({ buttons }) => {

    return (
        <div className={style.buttoncontainer}>
            {buttons.map(item => {
                let randomBgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                return <button className={style.button} style={{ 'background-color': randomBgColor }}>{item}</button>
            })}
        </div>
    );
}
export default ButtonsContainer;