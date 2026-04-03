import './App.css'
import FormStatus from './FormStatus';

function App() {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("form submitting...");
  }
  return (
    <>
      <h1>using form status hooks here</h1>
      <form action={handleSubmit}>
        <FormStatus />
      </form>
    </>
  )
}

export default App
