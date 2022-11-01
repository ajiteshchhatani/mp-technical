import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import InvoiceStatusChip from "./InvoiceStatusChip";
import { rows } from "./invoices_table_data";

export default function InvoicesTable({status}) {

    let data = rows.filter((row) => row.status === status)

    data.length === 0 ? data = rows : data;

    const columns = [
        {
            field: 'invoice_id',
            headerName: 'Invoice ID',
            width: 200
        },
        {
            field: 'customer',
            headerName: 'Customer',
            width: 200
        },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            renderCell: (params) => (
                <InvoiceStatusChip status={params.row.status} />
            )
        },
        {
            field: 'created',
            headerName: 'Created',
            width: 200
        }
    ]

    return (
        <DataGrid 
            sx={{ flexGrow: 1, borderRadius: '16px', background: 'white' }} 
            columns={columns} 
            rows={data}
            rowHeight={64}
            disableColumnMenu 
        />
    )
}