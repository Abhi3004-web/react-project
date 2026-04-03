import { useFormStatus } from 'react-dom'
function FormStatus() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
        <>
            <input type="text" placeholder="Enter Name" />
            <br />
            <input type="password" placeholder='Enter password' />
            <br />
            <button type="submit" disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
        </>
    )
}
export default FormStatus;