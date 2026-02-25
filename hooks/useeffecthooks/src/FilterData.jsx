
import {useState, useEffect} from 'react'

export default function FilterData() {
  let [data,setData]=useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(()=>{
    async function callData(){
   let response=await fetch("https://pokeapi.co/api/v2/pokemon");
   let dataval=await response.json();
  setData(dataval.results);
    }
    callData();
  },[])
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Custom Search Filter</h2>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        width: "250px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "20px",
      }}
    />

    {/* Filtered Results */}
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <li key={index} style={{ margin: "8px 0" }}>
            {item.name}
          </li>
        ))
      ) : (
        <li>No results found</li>
      )}
    </ul>
  </div>
  );
}
