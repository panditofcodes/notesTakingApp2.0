import React, { useState } from "react";
import "./component.css";
import { RxCross1 } from "react-icons/rx";
import AddTag from "./AddTag";

function ShowTags() {
  const [tags, setTags] = useState(["Tags"]); 

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <div id="show-tag">
        {tags.map((tag, index) => (
          <div key={index} className="show-tag">
            <label htmlFor="show-tag">{tag}</label>
            <RxCross1 onClick={() => removeTag(tag)} className="tag-remove" />
          </div>
        ))}

        <AddTag />
      </div>
    </>
  );
}

export default ShowTags;
