import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => (
    <AppBar position = "static">
        <Toolbar>
            <Typography variant="h6" sx={{flexGrow: 1 }}>
                Aperio
            </Typography>
            <Link href="/" passHref>
                <Button color="inherit">Home</Button>
            </Link>
            <Link href="/journals" passHref>
                <Button color="inherit">Journals</Button>
            </Link>
            <Link href="/profile" passHref>
                <Button color="inherit">Profile</Button>
            </Link>
        </Toolbar>
    </AppBar>
);

export default Navbar;