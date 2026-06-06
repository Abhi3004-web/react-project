import { useState } from 'react';
import { PageData } from './data'
function TempDataList() {
    const [pages, setPages] = useState(1);
    const perPageItem = 10;
    const totalPages = Math.ceil(PageData.length / perPageItem);
    const startIndex = (pages - 1) * perPageItem;
    const lastIndex = startIndex + perPageItem;
    const perPageData = PageData.slice(startIndex, lastIndex);
    return (
        <>
            <table border={3} cellPadding={3} cellSpacing={3}>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>age</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>

                    {perPageData.map((item) => (
                        <tr>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <button onClick={() => setPages((prev) => prev - 1)} disabled={pages === 1}>prev</button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button style={{
                    fontWeight: pages === index + 1 ? "bold" : "normal",
                    backgroundColor: pages === index + 1 ? "green" : "gray",
                    border: "1px solid #575656",
                    padding: "0px",
                    width: "30px", height: "30px"

                }} key={index} onClick={() => setPages(index + 1)}>{index + 1}</button>
            ))}
            <button onClick={() => setPages((prev) => prev + 1)} disabled={pages >= totalPages}>next</button>
        </>
    )
}
export default TempDataList;