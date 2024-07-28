// src/components/ShowNotes.js

import React, { useState, useEffect } from "react";
import Note from "./Note";
import { getAllNotes, addNoteToDB, deleteNoteFromDB, updateNoteInDB } from "../database/noteManagement";
import "./component.css";

function ShowNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then(fetchedNotes => {
      console.log("Fetched notes from IndexedDB:", fetchedNotes); // Debugging line
      if (fetchedNotes.length === 0) {
        const newNote = {
          id: Date.now(),
          title: "", // Blank title
          content: "", // Blank content
          tags: [], // Blank tags
        };
        setNotes([newNote]);
        addNoteToDB(newNote).then(() => {
          console.log("Blank note added to IndexedDB:", newNote); // Debugging line
        }).catch(error => {
          console.error("Error adding blank note to IndexedDB:", error); // Debugging line
        });
      } else {
        setNotes(fetchedNotes);
      }
    }).catch(error => {
      console.error("Error fetching notes from IndexedDB:", error); // Debugging line
    });
  }, []);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "", // Blank title
      content: "", // Blank content
      tags: [], // Blank tags
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    addNoteToDB(newNote).then(() => {
      console.log("New note added to IndexedDB:", newNote); // Debugging line
    }).catch(error => {
      console.error("Error adding new note to IndexedDB:", error); // Debugging line
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    deleteNoteFromDB(id).then(() => {
      console.log("Note deleted from IndexedDB:", id); // Debugging line
    }).catch(error => {
      console.error("Error deleting note from IndexedDB:", error); // Debugging line
    });
  };

  const updateNote = (id, updatedTitle, updatedContent) => {
    const updatedNote = { id, title: updatedTitle, content: updatedContent, tags: [] };
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? updatedNote : note
      )
    );
    updateNoteInDB(updatedNote).then(() => {
      console.log("Note updated in IndexedDB:", updatedNote); // Debugging line
    }).catch(error => {
      console.error("Error updating note in IndexedDB:", error); // Debugging line
    });
  };

  const handleSave = () => {
    console.log("Note saved");
  };

  return (
    <>
      <button className="add-note" onClick={addNote}>
        Create Note
      </button>
      <div className="notes-section">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={() => deleteNote(note.id)}
            onTitleChange={(newTitle) =>
              updateNote(note.id, newTitle, note.content)
            }
            onContentChange={(newContent) =>
              updateNote(note.id, note.title, newContent)
            }
            handleSave={handleSave}
          />
        ))}
      </div>
    </>
  );
}

export default ShowNotes;
