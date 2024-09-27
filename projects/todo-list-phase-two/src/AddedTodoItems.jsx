let AddedTodoItems = ({ itemname, itemdate }) => {
    // Destructuring in bracet already
    return <>
        <div className="row todo-row">
            <div className="col-6">
                <label>{itemname}</label>
            </div>
            <div className="col-3">
                <label>{itemdate}</label>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger">delete</button>
            </div>
        </div>
    </>
}
export default AddedTodoItems;

// let AddedTodoItems = (props) => {
//     // Destructuring here
//     let { itemname, itemdate } = props;
//     return <>
//         <div className="row todo-row">
//             <div className="col-6">
//                 <label>{itemname}</label>
//             </div>
//             <div className="col-3">
//                 <label>{itemdate}</label>
//             </div>
//             <div className="col-2">
//                 <button type="button" className="btn btn-danger">delete</button>
//             </div>
//         </div>
//     </>
// }
// export default AddedTodoItems;