import style from './TodoHeading.module.css'

const TodoHeading = () => {
    const header = "Todo Heading"
    return <h1 className={style.heading}>{header}</h1>
}
export default TodoHeading