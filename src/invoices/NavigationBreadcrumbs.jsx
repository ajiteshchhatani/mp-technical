import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import "./_styles.scss";

export default function NavigationBreadcrumbs() {
    return (
        <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Link className="breadcrumb-links" underline="hover" key="1" href="/">Home</Link>
            <Link className="breadcrumb-links" underline="hover" key="2" href="/">Invoices</Link>
        </Breadcrumbs>
    )
}