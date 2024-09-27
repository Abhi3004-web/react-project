import styles from "./ItemsList.module.css"
const Item = ({ ItemData }) => {
    const clickFoodItem = (event) => (
        console.log(event),
        console.log(`${ItemData} is clicked`)
    );
    return <>
        <li className="list-group-item">{ItemData}
            <button type="button" className={`${styles.button} btn btn-info`} onClick={(event) => clickFoodItem(event)}>Buy</button>
        </li>
    </>
}
export default Item;