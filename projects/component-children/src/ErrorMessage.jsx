const ErrorMessage = ({ items }) => {
    return <>
        {(items.length == 0 && <h3>Food Items Cart is empty.</h3>)}
    </>
}
export default ErrorMessage;