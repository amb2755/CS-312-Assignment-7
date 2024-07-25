// src/components/Header.jsx

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

// Header component for displaying the app's header
function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <EmojiObjectsIcon />
                <Typography variant="h6">Keeper</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
