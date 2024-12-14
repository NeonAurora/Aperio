import React from "react";
import { Typography, Box } from "@mui/material";

export default function HomePage() {
  return(
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Aperio
      </Typography>
      <Typography variant="body1">
        Discover and Collaborate on the latest scientific advancements
      </Typography>
    </Box>
  );
}