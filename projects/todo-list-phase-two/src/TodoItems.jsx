
let TodoItems = () => {
    return <>
        <div className="row todo-row">
            <div className="col-6">
                <input type="text" placeholder='Please enter task'></input>
            </div>
            <div className="col-3">
                <input type='date' placeholder='please select date'></input>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success">Add</button>
            </div>
        </div>
    </>
}
export default TodoItems;