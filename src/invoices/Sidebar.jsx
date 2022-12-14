import * as React from "react";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Button, AppBar, IconButton, Box, Typography } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LinkIcon from "@mui/icons-material/Link";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../public/Layer 1.svg";
import ProfileIcon from "../../public/Basics.svg";
import "./_styles.scss";
import NavigationBreadcrumbs from "./NavigationBreadcrumbs";

export default function Sidebar() {
    const sidebarList = ['Overview', 'Payment links', 'Invoices', 'Payments', 'Settlements', 'Account settings']
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const getIcons = (text) => {
        switch (text) {
            case 'Overview':
                return <WidgetsIcon />
            case 'Payment links':
                return <LinkIcon />
            case 'Invoices':
                return <RequestQuoteIcon />
            case 'Payments':
                return <CreditCardIcon />
            case 'Settlements':
                return <SwapHorizIcon />
            case 'Account settings':
                return <SettingsIcon />

        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <Toolbar>
                <img src={Logo} alt="Mamo pay for business logo" />
            </Toolbar>
            <Divider></Divider>
            <Button className="payment-link-button">Create payment link</Button>
            <List>
                {
                    sidebarList.map((text) => (
                        <ListItem sx={{ padding: '0 8px' }} key={text}>
                            <ListItemButton sx={{
                                "&:hover": {
                                    backgroundColor: "#5252FF"
                                }
                            }}>
                                <ListItemIcon sx={{ minWidth: '40px' }}>{getIcons(text)}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <AppBar
                position="fixed"
                className="invoices-top-navigation"
            >
                <Toolbar className="top-toolbar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className="hamburger-menu-icon"
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={Logo} className="mamo-pay-mobile-logo" alt="Mamo pay for business logo" />
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <NavigationBreadcrumbs />
                    </Box>
                    <img src={ProfileIcon} alt="Profile icon" className="user-avatar" />
                </Toolbar>
                <Divider sx={{ display: { xs: 'none', md: 'block' } }}></Divider>
            </AppBar>

            <Box
                component="nav"
                className="drawer-container"
                aria-label="invoice actions"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    className="mobile-only-sidebar"
                >
                    {drawer}
                    <Box className="sidebar-footer-text"><Typography>??? Powered by Mamo</Typography></Box>
                </Drawer>

                <Drawer
                    variant="permanent"
                    className="permanent-sidebar"
                    open
                >
                    {drawer}
                    <Box className="sidebar-footer-text"><Typography>??? Powered by Mamo</Typography></Box>
                </Drawer>
            </Box>

        </Box>
    )
}