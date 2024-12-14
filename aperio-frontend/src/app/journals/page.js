import React from "react";
import { Typography, Card, CardContent, Grid2, Grid } from "@mui/material";
import { Michroma } from "next/font/google";


const mockJournals = [
    { id: "1", title: "The Future of Microbiology", description: "A detailed look into ... .. .. " },
    { id: "2", title: "Recent Advances in AI", description: "Exploring how AI is revolutionizing .. .. .. " }
];


export default function JournalPages () {
    return (
        <Grid2 container spacing={3}>
            {mockJournals.map((journal) => (
                <Grid2>
                    <Card>
                        <CardContent>
                            <Typography>
                                {journal.title}
                            </Typography>
                            <Typography>
                                {journal.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    );

}