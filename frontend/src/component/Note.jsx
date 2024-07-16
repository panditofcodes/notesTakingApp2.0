import React from "react";
import "./component.css";
import { FaSave, FaEdit, FaTag } from "react-icons/fa";
import { MdDeleteForever, MdClear } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import ShowTags from "./ShowTags";

function Note({ note, onDelete, onTitleChange, onContentChange }) {
  const clearTextarea = () => {
    onTitleChange("");
    onContentChange("");
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
              <MdDeleteForever onClick={onDelete} />
            </li>
          </ul>
        </div>
        <div className="note-title">
          <textarea
            name="note-title"
            id="note-title"
            placeholder="Enter title here"
            value={note.title}
            onChange={(e) => onTitleChange(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="note-area">
          <textarea
            name="note"
            id="note"
            placeholder="Write your note here!"
            value={note.content}
            onChange={(e) => onContentChange(e.target.value)}
          ></textarea>
          <ShowTags tags={note.tags} />
        </div>
      </div>
    </>
  );
}

export default Note;
