// src/components/CreateArea.jsx

import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// CreateArea component for adding new notes //
function CreateArea({ onAdd }) {
    const [note, setNote] = useState({ title: "", content: "" });

    // Function to handle changes in the input fields //
    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => ({ ...prevNote, [name]: value }));
    }

    // Function to handle the submission of a new note //
    function submitNote() {
        onAdd(note);
        setNote({ title: "", content: "" });
    }

    return (
        <Paper>
            <TextField
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                fullWidth
            />
            <TextField
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                fullWidth
                multiline
            />
            <Button onClick={submitNote}>
                <AddIcon />
            </Button>
        </Paper>
    );
}

export default CreateArea;
