import { useSharedState } from '../context/MyContext'
import './Button.css';
function Button() {
    const { count, increment } = useSharedState()
    return (
        <>
            <button id="click-btn" className="shared-btn" onClick={increment}>Hello World Abhijit Ranjan: {count}</button>
        </>
    )
}
export default Button;