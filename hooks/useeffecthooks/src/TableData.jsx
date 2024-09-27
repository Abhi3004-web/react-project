import { useState, useEffect } from "react";

const TableData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Shopping Cart Details</h1>
            <br />
            <div className="container text-center">
                <div className="row row-cols-4">

                    {data.map((item) => (
                        <div key={item.id} className="col" style={{ width: '18rem', border: '1px solid #d2d2d2', padding: '10px', margin: '5px' }}>
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <p className="card-text">{item.rating.rate}</p>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TableData;
