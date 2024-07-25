// src/components/Note.jsx

import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Note component for displaying individual notes with a delete button
function Note({ id, title, content, onDelete }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => onDelete(id)}>
                    <DeleteIcon />
                </Button>
            </CardActions>
        </Card>
    );
}

export default Note;
