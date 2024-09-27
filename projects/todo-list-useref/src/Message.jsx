let Message = ({ addedItems }) => {
    return <>
        {addedItems.length === 0 && <center>Enjoy your day</center>}
    </>
}
export default Message;