import React, { useState, useEffect } from 'react';

function RefData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use the useEffect hook to fetch data from an API when the component mounts
    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Set loading to false when data fetching is done
            }
        };

        fetchData();

        // Optionally, return a cleanup function (if needed)
        return () => {
            console.log('Cleanup if necessary');
        };
    }, []); // Empty dependency array means this effect runs only on component mount

    // Render the component
    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error fetching data: {error}</p>;

    return (
        <div>
            <h1>Fetched Data:</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default RefData;
