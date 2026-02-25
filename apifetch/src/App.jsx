import React, { useEffect, useState } from 'react';
import Child from './Child';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
    // API fetch logic
    //fetch('https://randomuser.me/api')
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        setUsers(data); // Save data to state
        setLoading(false); // Stop loading
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false); // Stop loading on error too
      });
    }
    fetchData();
  }, []); // Empty array = run once on mount

  const deleteRecord = (id) => {
    let newRecord = users.filter((item) => item.id != id);
    setUsers(newRecord);
  }
  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Child key={user.id} email={user.email} city={user.address.city} name={user.name} deleteRow={() => deleteRecord(user.id)}></Child>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
