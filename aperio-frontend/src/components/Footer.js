import React from "react";
import { Box, Typography } from "@mui/material";


const Footer = () => (
    <Box 
        sx={{
            backgroundColor: 'primary.pain',
            color: 'white',
            textAlign: 'center',
            padding: 2

        }}
    >
        <Typography>
            ©{new Date().getFullYear()} Aperio. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;