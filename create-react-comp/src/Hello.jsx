function Hello() {
    let name = "Abhijit Ranjan";
    let nameByMethod = () => {
        return "Anshu";
    }
    return <div>
        <h3> this is dynamically add name. my name is {name}</h3>
        <h4> Can we call my name {nameByMethod()} by using function?</h4>     
    </div>
}
export default Hello;