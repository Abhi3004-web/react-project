import { useRef } from 'react'
import './App.css'
import Child from './Child';

function App() {
  let inputRef = useRef(null);
  const focusVal = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }

  return (
    <>
      <h1>FOrward Ref using here.</h1>

      <Child ref={inputRef} />
      <button onClick={focusVal}>onFocus</button>
    </>
  )
}

export default App
