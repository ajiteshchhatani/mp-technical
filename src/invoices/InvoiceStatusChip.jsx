import { Chip } from "@mui/material";
import React from "react";

export default function InvoiceStatusChip({ status }) {
    return (
        status === 'Outstanding' ?
            <Chip label="Outstanding" sx={{background: '#E7E7FF', color: '#3333FF'}} /> : 
        status === 'Paid' ? 
            <Chip label="Paid" sx={{background: '#E3FAF1', color: '#2DB37C'}} /> : 
        status === 'Cancelled' ? 
            <Chip label="Cancelled" sx={{background: '#E5E9F0', color: '#525A67'}} /> : null
    )
}