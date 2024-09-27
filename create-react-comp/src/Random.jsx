function Random() {
    // creating dynamic background color
    let randomValue = () => {
        return Math.round(Math.random() * 100);
    }
    let randomBgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return <div>
        <h4 style={{ 'backgroundColor': randomBgColor }}>Show random value : {randomValue()}</h4>
    </div>
}
export default Random;