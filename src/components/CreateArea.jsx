import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function setTitle(event) {
    const title = event.target.value;
    setNoteTitle(title);
  }

  function setContent(event) {
    const content = event.target.value;
    setNoteContent(content);
  }

  return (
    <div>
      <form>
        <input
          onChange={setTitle}
          name="title"
          placeholder="Title"
          value={noteTitle}
        />
        <textarea
          onChange={setContent}
          name="content"
          rows="3"
          value={noteContent}
          placeholder="Take a note..."
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addNote(noteTitle, noteContent);
            setNoteTitle("");
            setNoteContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
