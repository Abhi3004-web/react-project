import style from './Component.module.css'
const Component = (props) => {
    return <div className={style.divMain}>{props.children}</div>
}
export default Component;