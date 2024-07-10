import React, { useState } from "react";
import "./component.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdDeleteForever, MdClear } from "react-icons/md";
import ShowTags from "./ShowTags";

function Note() {
  const [textareaValue, setTextareaValue] = useState("");

  const clearTextarea = () => {
    setTextareaValue("");
  };

  return (
    <>
      <div id="note">
        <div className="tool-ribbon">
          <ul>
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
        <div className="note-area">
          <textarea
            name="note"
            id="note"
            placeholder="Write your note here!"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          ></textarea>
          <ShowTags />
        </div>
      </div>
    </>
  );
}

export default Note;
