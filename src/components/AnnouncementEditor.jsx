import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const AnnouncementEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div className="bg-white p-2 rounded-md text-black">
      <ReactQuill
        value={content}
        // onChange={handleQuillChange}
        className="bg-white"
      />
    </div>
  );
};

export default AnnouncementEditor;
