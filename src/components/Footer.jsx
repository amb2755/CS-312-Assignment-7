// src/components/Footer.jsx

import React from "react";
import { Typography, Container } from "@mui/material";

// Footer component for displaying the footer with the current year
function Footer() {
    const year = new Date().getFullYear();
    return (
        <Container>
            <Typography variant="body2" color="textSecondary" align="center">
                © {year}
            </Typography>
        </Container>
    );
}

export default Footer;
