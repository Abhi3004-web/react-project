import { useEffect, useState } from 'react';
import { PageData } from './data';
import AgeChart from './AgeChart';
function ElippsisPagination() {
    const [page, setPage] = useState(1);
    const dataPerPage = 5;
    const totalPage = Math.ceil(PageData.length / dataPerPage);
    const startIndex = (page - 1) * dataPerPage;
    const lastIndex = startIndex + dataPerPage;
    const currentData = PageData.slice(startIndex, lastIndex);
    const getPageNumber = () => {
        let pages = [];
        pages.push(1);
        if (page > 3) {
            pages.push("...");
        }
        for (let i = page - 1; i <= page + 1; i++) {
            if (i > 1 && i < totalPage) {
                pages.push(i);
            }
        }
        if (page < totalPage - 2) {
            pages.push('...');
        }
        if (totalPage > 1) {
            pages.push(totalPage);
        }
        return pages;
    }
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const result = Object.values(PageData.reduce((acc, { age }) => {
            acc[age] = acc[age]
                ? { Age: age, count: acc[age].count + 1 }
                : { Age: age, count: 1 };
            return acc;
        }, {}));
        setChartData(result);

    }, [])

    return (
        <>
            <h1>New Pagination Idea</h1>
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
            <button onClick={() => setPage((prevpage) => prevpage - 1)} disabled={page === 1}>left</button>
            {/* Dynamic page buttons */}
            {
                getPageNumber().map((item, index) => (
                    item === "..." ? (<span key={index}>...</span>) :
                        <button onClick={() => setPage(item)} style={{ background: page === item ? "green" : "#ddd" }}>{item}</button>))
            }
            <button onClick={() => setPage((prevpage) => prevpage + 1)} disabled={page === totalPage}>Right</button>
            <AgeChart data={chartData} />
        </>
    )
}
export default ElippsisPagination;