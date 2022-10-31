import React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import "./_styles.scss";
import InvoicesTabs from "./InvoicesTabs";
import NavigationBreadcrumbs from "./NavigationBreadcrumbs";

export default function InvoicesContent() {
    return (
        <Box
            component="main"
            className="main-container"
        >
            <Toolbar className="mobile-only-breadcrumbs">
                <NavigationBreadcrumbs />
            </Toolbar>

            <Divider sx={{ display: { xs: 'block', md: 'none' } }}></Divider>

            <Box sx={{ height: '140px' }} className="invoices-info-container">
                <Typography variant="h1">Invoices</Typography>
                <Typography variant="subtitle1">Total outstanding amount: <span>AED 1915.76</span></Typography>
            </Box>



            <Box className="tabs-container" sx={{ height: '100%', display: { xs: 'none', 'sm': 'block' } }}>
                <InvoicesTabs />
            </Box>


        </Box>
    )
}