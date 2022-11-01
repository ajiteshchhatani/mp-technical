import React from "react";
import { Box } from "@mui/material";
import InvoiceStatusChip from "./InvoiceStatusChip";
import { rows } from "./invoices_table_data";

export default function InvoiceDetailsMobile({status}) {

    let data = rows.filter((row) => row.status === status);

    data.length === 0 ? data = rows : data;

    return (
        <>
            {
                data.map((row) => (
                    <Box key={row.id} className="invoice-details-mobile-container">
                <Box className="invoice-details-mobile-rows">
                    <InvoiceStatusChip status={row.status} />
                    <p>...</p>
                </Box>
                <Box className="invoice-details-mobile-rows">
                    <p>{row.customer}</p>
                    <p>{row.amount}</p>
                </Box>
                <Box className="invoice-details-mobile-rows">
                    <p>{row.invoice_id}</p>
                    <p>{row.created}</p>
                </Box>
            </Box>
                ))
            }
        </>
    )
}