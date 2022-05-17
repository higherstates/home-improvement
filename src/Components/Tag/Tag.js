import React from "react";
import "./Tag.css";
import { BsXCircleFill } from "react-icons/bs";

const Tag = ({ style, removeTag }) => {
  return (
    <div className="tag">
      <p>{style}</p>
      <BsXCircleFill
        onClick={() => removeTag(style)}
      />
    </div>
  );
};

export default Tag;
