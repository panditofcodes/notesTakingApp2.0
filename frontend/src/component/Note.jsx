import React, { useState } from "react";
import "./component.css";
import { FaSave, FaEdit, FaTag } from "react-icons/fa";
import { MdDeleteForever, MdClear } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import ShowTags from "./ShowTags";

function Note() {
  const [noteValue, setNoteValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const clearTextarea = () => {
    setNoteValue("");
    setTitleValue("");
  };

  return (
    <>
      <div id="note">
        <div className="tool-ribbon">
          <ul>
            <li>
              <FaTag />
            </li>
            <li>
              <CiEdit />
            </li>
            <li>
              <MdClear onClick={clearTextarea} />
            </li>
            <li>
              <FaSave />
            </li>
            <li>
              <FaEdit />
            </li>
            <li>
              <MdDeleteForever />
            </li>
          </ul>
        </div>
        <div className="note-title">
          <textarea
            name="note-title"
            id="note-title"
            placeholder="Enter title here"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="note-area">
          <textarea
            name="note"
            id="note"
            placeholder="Write your note here!"
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)}
          ></textarea>
          <ShowTags />
        </div>
      </div>
    </>
  );
}

export default Note;
