function AddedTodoItems2() {
    let todoItemName = "Go to College";
    let purchageDate = "23/05/2024";
    return <div className="container-todo">
        <div className="row">
            <div className="col-6">
                <label>{todoItemName}</label>
            </div>
            <div className="col-3">
                <label>{purchageDate}</label>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger">delete</button>
            </div>
        </div>
    </div>
}
export default AddedTodoItems2