const TodoItems = ({ ItemName, PurchageDate, DeleteData }) => {
    return <>
        <div className="row todo-row">
            <div className="col-6">
                <label>{ItemName}</label>
            </div>
            <div className="col-3">
                <label>{PurchageDate}</label>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={() => DeleteData(ItemName)}>delete</button>
            </div>
        </div></>
}
export default TodoItems;