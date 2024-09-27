let CurrentDate = () => {
    let date = new Date();
    return <div className="container-todo">
        <p>Current Date and Time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
    </div>
}
export default CurrentDate;