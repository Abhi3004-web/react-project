

function AddUser({ setUser }) {
    return (
        <>
            <h1>Add User </h1>
            <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="add user" />
            <hr />
        </>
    )
}
export default AddUser;