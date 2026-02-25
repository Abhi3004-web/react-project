import './App.css'
import ChildA from './ChildA';
import { UserContext } from './Context/UserContext';
import { TheamContext } from './Context/TheamContext';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    Name: ["Abhijit"],
    City: ["Delhi"]
  });

  const setValue = (value, city) => {
    setData((prev) => ({

      Name: [...prev.Name, value],
      City: [...prev.City, city]
    })
    )
  }
  const theme = "Red"

  return (
    <>
      <UserContext.Provider value={[data, setValue]}>
        <TheamContext.Provider value={theme}>
          <ChildA></ChildA>
        </TheamContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
