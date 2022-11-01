import React, { useState } from "react";
import { Box, Button, Divider, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import InvoicesTable from "./InvoicesTable";
import "./_styles.scss";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
    const { children, value, status } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== status}
            id={`tabpanel-${status}`}
            aria-labelledby={`tab-${status}`}
            style={{ height: '100%', padding: '16px' }}
        >
            {
                value === status && (
                    <Box sx={{ height: '100%' }}>
                        {children}
                    </Box>
                )
            }

        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired
}

export default function InvoicesTabs() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleFormNavigation = () => {
        navigate("/invoiceform")
    }

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tabs value={value} scrollButtons allowScrollButtonsMobile variant="scrollable" onChange={handleChange} aria-label="invoices-tabs">
                    <Tab label="All invoices (10)" id="all-invoices-tab" aria-controls="all-invoices-tabpanel"></Tab>
                    <Tab label="Outstanding (5)" id="outstanding-invoices-tab" aria-controls="outstanding-invoices-tabpanel"></Tab>
                    <Tab label="Paid (3)" id="paid-invoices-tab" aria-controls="paid-invoices-tabpanel"></Tab>
                    <Tab label="Cancelled (2)" id="cancelled-invoices-tab" aria-controls="cancelled-invoices-tabpanel"></Tab>
                </Tabs>
                <Button className="new-invoice-button" startIcon={<AddIcon />} onClick={handleFormNavigation}>New Invoice</Button>
            </Box>
            <Divider></Divider>
            <TabPanel value={value} status={0}>
                <InvoicesTable status="All invoices" />
            </TabPanel>
            <TabPanel value={value} status={1}>
                <InvoicesTable status="Outstanding" />
            </TabPanel>
            <TabPanel value={value} status={2}>
                <InvoicesTable status="Paid" />
            </TabPanel>
            <TabPanel value={value} status={3}>
                <InvoicesTable status="Cancelled" />
            </TabPanel>
        </Box>
    )
}