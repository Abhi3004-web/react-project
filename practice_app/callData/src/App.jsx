import { useEffect, useState } from 'react'
import { Utility } from './Utility'
import './App.css'
import Countup from './countup';
//const data = "https://randomuser.me/api/?results=4";
export default function App() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4") // 👈 replace with your API
      .then((res) => res.json())
      .then((result) => {
        const apiData = result.results || [];

        // Flatten all rows
        const flattened = apiData.map((item) => Utility(item));

        // Extract dynamic headers
        const allKeys = Array.from(
          new Set(flattened.flatMap((item) => Object.keys(item)))
        );

        setData(flattened);
        setHeaders(allKeys);
      })
      .catch((err) => console.error(err));
  }, []);

  return (


    <div style={{ padding: "20px" }}>
      <Countup />
      <h2>User Data Table (API)</h2>

      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {headers.map((header) => (
                <td key={header}>
                  {typeof row[header] === "string" &&
                    row[header]?.startsWith("http") ? (
                    <img src={row[header]} alt="" width="50" />
                  ) : (
                    row[header] ?? "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}