let ErrorMessage = ({ items }) => {
    return <>{items.length === 0 && <h3>List is blank</h3>}
    </>
}
export default ErrorMessage;