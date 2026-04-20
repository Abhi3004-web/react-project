import { useState } from 'react'
import { count } from './data'
import './App.css'
import ElippsisPagination from './ElippsisPagination';
import TempDataList from './TempDataList';

function App() {
  const [pages, setPages] = useState(1);
  const pagePerItem = 7;
  const totalPage = Math.ceil(count.length / pagePerItem);
  const startIndex = (pages - 1) * pagePerItem;
  const endIndex = startIndex + pagePerItem;
  const currentData = count.slice(startIndex, endIndex);

  return (
    <>
      <table cellPadding={3} cellSpacing={5} border={2}>
        <thead>
          <tr>
            <th>username</th>
            <th>email</th>
            <th>age</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setPages((prevpage) => prevpage - 1)} disabled={pages === 1}>left</button>


      {Array.from({ length: totalPage }, (_, index) => (
        <button
          key={index}
          onClick={() => setPages(index + 1)}
          style={{
            fontWeight: pages === index + 1 ? "bold" : "normal",
            backgroundColor: pages === index + 1 ? "Green" : "#ddd",
            border: "1px solid #000"
          }}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={() => setPages((prevpage) => prevpage + 1)} disabled={pages === totalPage}>right</button>
      <br />
      <ElippsisPagination />
      <TempDataList />
    </>
  )
}

export default App
