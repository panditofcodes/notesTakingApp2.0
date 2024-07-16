import React, { useState } from "react";
import Note from "./Note";
import "./component.css";

function ShowNotes() {
  const initialNotes = [
    {
      id: 1,
      title: "First Note",
      content: "This is the content of the first note.",
      tags: ["first", "important"],
    },
    {
      id: 2,
      title: "Second Note",
      content: "This is the content of the second note.",
      tags: ["second", "reminder"],
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "", // Blank title
      content: "", // Blank content
      tags: [], // Blank tags
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedTitle, updatedContent) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle, content: updatedContent }
          : note
      )
    );
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
          />
        ))}
      </div>
    </>
  );
}

export default ShowNotes;
