function Second() {
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = document.getElementById("Name").value;
        console.log(data);
    }
    const test = "<h1>Hello.....................................</h1>";
    return (
        <>
            <form method="get">
                Name1 : <input type="text" id="Name"></input>
                <br />
                Password1 : <input type="password" ></input>
                <br />
                Email1 : <input type="text" ></input>
                <br />
                <button type="submit" onClick={handleSubmit}>submit</button>
                <div dangerouslySetInnerHTML={{ __html: test }} />
            </form>
        </>
    )
}
export default Second;