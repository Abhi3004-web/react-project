import styles from "./ItemsList.module.css"
const Item = ({ ItemData, bought, handleBuyButton }) => {
    return <>
        <li className={`list-group-item ${bought && "active"}`}>{ItemData}

            {/* <button type="button" className={`${styles.button} btn btn-info`} onClick={(event) => clickFoodItem(event)}>Buy</button> */}
            <button type="button" className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>
        </li>
    </>
}
export default Item;