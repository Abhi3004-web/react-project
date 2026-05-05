import { count } from './data'
import { ModuleRegistry, AllCommunityModule, InfiniteRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";


ModuleRegistry.registerModules([InfiniteRowModelModule]);
ModuleRegistry.registerModules([AllCommunityModule]);
function AGGridData() {
    const [columnDefs] = useState([
        { field: "username", sortable: true, filter: true },
        { field: "email", sortable: true, filter: true },
        { field: "age", sortable: true, filter: true },
        { field: "address", sortable: true, filter: true }
    ]);
    const dataSource = {
        getRows: async (params) => {
            params.successCallback(count, count.length);
        }
    };
    return (
        <>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <AgGridReact rowData={count} columnDefs={columnDefs} pagination={true}
                    paginationPageSize={5} />
                <AgGridReact
                    columnDefs={columnDefs}
                    rowModelType="infinite"
                    datasource={dataSource}
                    cacheBlockSize={10}
                />
            </div>
        </>
    )
}
export default AGGridData;