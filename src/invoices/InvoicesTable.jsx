import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import InvoiceStatusChip from "./InvoiceStatusChip";

export default function InvoicesTable() {

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
                console.log(params),
                <InvoiceStatusChip status={params.row.status} />
            )
        },
        {
            field: 'created',
            headerName: 'Created',
            width: 200
        }
    ]

    const rows = [
        {
            id: 1,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Outstanding',
            created: '25/04/2021'
        },
        {
            id: 2,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Outstanding',
            created: '25/04/2021'
        },
        {
            id: 3,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Outstanding',
            created: '25/04/2021'
        },
        {
            id: 4,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Outstanding',
            created: '25/04/2021'
        },
        {
            id: 5,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Outstanding',
            created: '25/04/2021'
        },
        {
            id: 6,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Paid',
            created: '25/04/2021'
        },
        {
            id: 7,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Cancelled',
            created: '25/04/2021'
        },
        {
            id: 8,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Cancelled',
            created: '25/04/2021'
        },
        {
            id: 9,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Paid',
            created: '25/04/2021'
        },
        {
            id: 10,
            invoice_id: '4574232-0001',
            customer: 'Asma Alyamani',
            amount: 'AED 150.00',
            status: 'Paid',
            created: '25/04/2021'
        },
    ]
    return (
        <DataGrid 
            sx={{ flexGrow: 1, borderRadius: '16px', background: 'white' }} 
            columns={columns} 
            rows={rows}
            rowHeight={64}
            disableColumnMenu 
        />
    )
}