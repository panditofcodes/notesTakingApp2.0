import React, { useState } from "react";
import Note from "./Note";
import "./component.css"

function ShowNotes() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now() }]);
  };

  return (
    <>
      <button className="add-note" onClick={addNote}>
        Create Note
      </button>
      <div className="notes-section">
        {" "}
        <Note />
        {notes.map((note) => (
          <Note key={note.id} />
        ))}
      </div>
    </>
  );
}

export default ShowNotes;
