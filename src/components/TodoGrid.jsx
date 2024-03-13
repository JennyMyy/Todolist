import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import { Button, Stack } from "@mui/material";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; 

export default function TodoGrid(props) {

    const [columnDefs] = useState([
        {
            headerName: 'Desciprion', field: 'description', sortable: true, filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Date', field: 'date', sortable: true, filter: true,
            floatingFilter: true
        },
        {
            field: "priority", sortable: true, filter: true,
            floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ]);

    const gridRef = useRef();

    const onDelete = () => {
        const removeId = gridRef.current.getSelectedNodes()[0].rowIndex
        props.deleteByIndex(removeId);
    }


    return (
        <>
    
            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={props.todos}
                    columnDefs={columnDefs}
                    rowSelection="single"
                />
            </div>
            <Button
                variant="outlined"
                color="error"
                onClick={onDelete}>
                Delete
            </Button>
            </Stack>

        </>
    )

}