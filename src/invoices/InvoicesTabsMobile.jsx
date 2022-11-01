import React, { useState } from "react";
import { Box, Button, Divider, Fab, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import "./_styles.scss";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import InvoiceDetailsMobile from "./InvoiceDetailsMobile";

function TabPanel(props) {
    const { children, value, status } = props

    return (
        <div
            role="mobile-tabpanel"
            hidden={value !== status}
            id={`mobile-tabpanel-${status}`}
            aria-labelledby={`mobile-tab-${status}`}
            style={{ padding: '16px' }}
        >
            {
                value === status && (
                    <Box>
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

export default function InvoicesTabsMobile() {
    const [value, setValue] = useState(0);
    const [activeTab, setActiveTab] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        console.log("mobile tabs", newValue)
        setValue(newValue)
    }

    const handleFormNavigation = () => {
        navigate("/invoiceform")
    }

    setTimeout(() => {
        setActiveTab(true)
    }, 200)

    const tabArray = [
        {
            label:"All invoices (10)",
            id: "mobile-all-invoices-tab",
            key: "mobile-all-invoices-tab"
        },
        {
            label:"Outstanding (5)",
            id: "mobile-outstanding-invoices-tab",
            key: "mobile-outstanding-invoices-tab"
        },
        {
            label:"Paid(3)",
            id: "mobile-paid-invoices-tab",
            key: "mobile-paid-invoices-tab"
        },
        {
            label:"Cancelled(2)",
            id: "mobile-cancelled-invoices-tab",
            key: "mobile-cancelled-invoices-tab"
        }
    ]

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tabs value={value} onChange={handleChange} aria-label="mobile-invoices-tabs">
                    {
                        activeTab && (
                            tabArray.map((item) => (
                                <Tab {...item} />
                            ))
                        )
                    }
                </Tabs>
                <Box sx={{position: 'fixed', width: '100%', height: '100%'}}>
                    <Fab className="new-invoice-button" sx={{ position: 'absolute', bottom: '0px', right: '16px'}} variant="extended" onClick={handleFormNavigation}>
                        <AddIcon />
                        New Invoice
                    </Fab>
                </Box>
            </Box>
            <Divider></Divider>
            <TabPanel value={value} status={0}>
                <InvoiceDetailsMobile status="All invoices" />
            </TabPanel>
            <TabPanel value={value} status={1}>
                <InvoiceDetailsMobile status="Outstanding" />
            </TabPanel>
            <TabPanel value={value} status={2}>
                <InvoiceDetailsMobile status="Paid" />
            </TabPanel>
            <TabPanel value={value} status={3}>
                <InvoiceDetailsMobile status="Cancelled" />
            </TabPanel>
        </Box>
    )
}