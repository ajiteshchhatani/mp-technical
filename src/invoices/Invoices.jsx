import React from "react";
import InvoicesContent from "./InvoicesContent";
import Sidebar from "./Sidebar";
import "./_styles.scss";

export default function Invoices() {
    return (
        <>
            <Sidebar />
            <InvoicesContent />
        </>
    )
}