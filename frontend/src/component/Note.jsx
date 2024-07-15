import React from "react";
import "./component.css";
import { FaSave, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function Note() {
  return (
    <>
      <div id="note">
        <div className="tool-ribbon">
          <ul>
          <li>
          <CiEdit />
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
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Note;
