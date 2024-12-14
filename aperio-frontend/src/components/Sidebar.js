import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Home, Person, Book } from "@mui/icons-material"
import Link from "next/link";

const Sidebar = () => (
    <Drawer variant="permanent"
        sx={{
            widt: 240,
            flexShrink: 0,
            '& .MultiDrawer-paper' : { width: 240, boxSizing: 'border-box' },
        }}
    >
        <List>
            <Link href="/" passHref>
                <ListItem button>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
            </Link>
            <Link href="/journals" passHref>
                <ListItem button>
                    <ListItemIcon>
                        <Book />
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItem>
            </Link>
            <Link href="profile" passHref>
                <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItem>
            </Link>
        </List>
    </Drawer>
);

export default Sidebar;