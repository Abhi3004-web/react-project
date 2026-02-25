import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [tabledata, setTabledata] = useState([]);
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(prev => {
        let next = prev + 1;
        setTabledata(prev => [...prev, next]);
        return next;
      })
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <>
      count : {count}
      <button onClick={() => setCount(count + 1)}>increment</button>
      data : {data};
      <button onClick={() => setData(data + 1)}>data increment</button>
      <Counter count={count} data={data} />
      {count > 0 && <div>
        multiplication
        <table border="1" cellPadding={8} cellSpacing={5}>
          <tbody>
            {tabledata.map((item) => (
              <tr key={item}>
                {arrData.map((index) => (
                  <td key={index}>
                    {item} × {index} = {item * index}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </>
  )
}

export default App
