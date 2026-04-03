import { useState } from 'react'
import loader from './assets/icegif-1260.gif';
import './App.css'
import Test from './Test';

function App() {
  const [isPending, setIsPending] = useState(false);
  const handleClick = async () => {
    setIsPending(true);
    await new Promise(res => setTimeout(res, 2000));
    setIsPending(false);
  }

  return (
    <>
      <h1>without Use transition hooks in react 19</h1>
      {isPending ?(<div className="overlay"> <img style={{ width: '100px' }} src={loader} /></div>) : null}
      <button onClick={handleClick} disabled={isPending}>click</button>
      <Test />
    </>
  )
}

export default App
