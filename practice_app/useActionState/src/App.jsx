import { useActionState, useState } from 'react'
import './App.css'
const initialState = { error: "", success: "" };

function App() {
  const [localStorage, setLocalStorage] = useState(initialState);

  const func = async (prev, formData) => {
    console.log(prev)
    let name = formData.get("userName");
    let pass = formData.get("password");
    if (!name || !pass) {
      setLocalStorage({ error: "name and pass are not correct", success: "" });
      return { error: "name and pass are not correct", success: "" }
    };
    await new Promise((res) => setTimeout(res, 1000));
    setLocalStorage({ success: `Hello ${name} and ${pass}`, error: "" });
    return { success: `Hello ${name} and ${pass}`, error: "" };
  }

  const [state, formAction, isPending] = useActionState(func, initialState);

  const handleStatus = (e) => {
    if (localStorage.error != "" || localStorage.success != "") {
      setLocalStorage(initialState);
      state.error = "";
      state.success = "";
    }
  }

  return (
    <form action={formAction}>
      <input type="text" placeholder='Enter name..' name="userName" onChange={handleStatus} />
      <input type="password" placeholder='Enter Password..' name="password" onChange={handleStatus} />
      <button type="submit">{isPending ? "Processing..." : "Submit"}</button>
      {(state?.error || localStorage?.error) && (<p style={{ color: "red" }}>{state.error}</p>)}
      {(state?.success || localStorage?.success) && (<p style={{ color: "green" }}>{state.success}</p>)}
    </form>
  )
}

export default App
