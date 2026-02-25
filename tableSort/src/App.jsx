import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const employees = [
    { id: 1, name: "Alice Johnson", role: "Software Engineer", department: "IT", location: "New York" },
    { id: 2, name: "Bob Smith", role: "Project Manager", department: "Operations", location: "San Francisco" },
    { id: 3, name: "Charlie Davis", role: "UX Designer", department: "Design", location: "Los Angeles" },
    { id: 4, name: "Diana Wilson", role: "HR Manager", department: "Human Resources", location: "Chicago" },
    { id: 5, name: "Ethan Brown", role: "Data Analyst", department: "Analytics", location: "Boston" }
  ];

  const [data, setData] = useState(employees);

  const AscData = () => {
    let record = [...data].sort((a, b) => a.id - b.id);
    setData(record);
  }
  const DescData = () => {
    let record = [...data].sort((a, b) => b.id - a.id);
    setData(record);
  }
  const deleteRecord = (id) => {
    let record = [...data].filter((item) => item.id != id);
    setData(record);
  }

  return (
    <>
      <button onClick={() => AscData()}>Acs sorting</button>
      <button onClick={() => DescData()}>Decs sorting</button>


      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>role</th>
            <th>department</th>
            <th>location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.department}</td>
              <td>{item.location}</td>
              <td><button onClick={() => deleteRecord(item.id)}>Delete</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

    </>
  )
}

export default App
