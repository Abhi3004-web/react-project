import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout';
import UserInput from '../UserInput';

function App() {
  const [card, setCard] = useState({
    width: '260px',
    background: 'white',
    margin: '5px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  });
  const data = [
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "SubAdmin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "SubAdmin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "SubAdmin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Admin"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "Manger"
    },
    {
      image: "https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png",
      name: "Abhijit",
      role: "SubAdmin"
    },

  ];

  const handleStyle = () => {
    setCard({ ...card, background: 'white', color: 'black' })
  }
  const handleColorStyle = () => {
    setCard({ ...card, background: 'red', color: 'white' })
  }
  const [grid, setGrid] = useState(true);
  let inputRef = useRef(null);
  const handleInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }

  return (
    <>
      <UserInput ref={inputRef} />
      <button onClick={handleInput}>click me</button>
      <div>Style dynamic</div>
      <button onClick={(() => setGrid(!grid))}>check Grid or not</button>
      <button onClick={handleStyle}>Default Style</button>
      <button onClick={handleColorStyle}>Color Style</button>
      <div style={{ display: grid ? 'flex' : 'block', flexWrap: grid ? 'wrap' : 'nowrap' }}>
        <Layout data={data} card={card} />
      </div>
    </>
  )
}

export default App
