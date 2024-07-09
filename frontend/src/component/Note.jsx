import React from "react";
import "./component.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Note() {
  return (
    <>
      <div id="note">
        <div className="tool-ribbon">
            <div className="cloud-save"></div>
          <ul>
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
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Note;
