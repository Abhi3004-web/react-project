import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
// import * as XLSX from 'xlsx';
import './App.css';  // Import your CSS for styling

const data = [
  {
    code: 'BD/2024-25/26',
    submissionType: 'EOI',
    nameOfProposal: 'UAT Approval',
    clientName: 'Himesh Doshi',
    clientAddress: 'Venkata Ramana Estate...',
  },
  {
    code: 'BD/2024-25/26',
    submissionType: 'RFP',
    nameOfProposal: 'Prepare a complete...',
    clientName: 'Aslam Mukul Chakrabarti',
    clientAddress: '3rd Mani Bhushan...',
  },
  // More data here...
];

const App = () => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const columns = useMemo(() => [
    { Header: 'Code', accessor: 'code' },
    { Header: 'Submission Type', accessor: 'submissionType' },
    { Header: 'Name of Proposal', accessor: 'nameOfProposal' },
    { Header: 'Client Name', accessor: 'clientName' },
    { Header: 'Client Address', accessor: 'clientAddress' },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex },
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    page,
    setPageSize
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns },
    },
    useSortBy,
    usePagination
  );

  // Handle column toggle
  const toggleColumn = (columnId) => {
    setHiddenColumns(prev => prev.includes(columnId)
      ? prev.filter(id => id !== columnId)
      : [...prev, columnId]
    );
  };

  // Export to Excel
  // const exportToExcel = () => {
  //   const worksheet = XLSX.utils.json_to_sheet(data);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');
  //   XLSX.writeFile(workbook, 'table_data.xlsx');
  // };

  return (
    <div>
      <h1>Tabular Data with Custom Features</h1>
      {/* <button onClick={exportToExcel}>Export to Excel</button> */}

      {/* Toggle columns visibility */}
      <div>
        {columns.map(column => (
          <label key={column.accessor}>
            <input
              type="checkbox"
              checked={!hiddenColumns.includes(column.accessor)}
              onChange={() => toggleColumn(column.accessor)}
            />
            {column.Header}
          </label>
        ))}
      </div>

      {/* Table rendering */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add sort indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        <button onClick={previousPage} disabled={!canPreviousPage}>Previous</button>
        <button onClick={nextPage} disabled={!canNextPage}>Next</button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default App;
