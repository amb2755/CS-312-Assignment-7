// src/components/App.jsx

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { Container } from "@mui/material";

// App component is the main component managing the state and rendering other components
function App() {
    const [notes, setNotes] = useState([]);

    // Function to add a new note to the notes array
    function addNote(newNote) {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    }

    // Function to delete a note from the notes array by filtering out the note with the specified id
    function deleteNote(id) {
        setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
    }

    return (
        <Container>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            ))}
            <Footer />
        </Container>
    );
}

export default App;
