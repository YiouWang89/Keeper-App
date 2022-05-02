import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    noteTitle: [],
    noteContent: []
  });

  function newNote(newTitle, newContent) {
    setNote((preNote) => {
      const { noteTitle, noteContent } = preNote;
      return {
        noteTitle: [...noteTitle, newTitle],
        noteContent: [...noteContent, newContent]
      };
    });
  }

  function removeNote(id) {
    setNote((preNote) => {
      const newTitle = preNote.noteTitle.filter((title, index) => index !== id);
      const newContent = preNote.noteContent.filter(
        (content, index) => index !== id
      );
      return {
        noteTitle: newTitle,
        noteContent: newContent
      };
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={newNote} />
      {note.noteTitle.map((title, index) => {
        const indexContent = note.noteContent[index];
        return (
          <Note
            key={index}
            id={index}
            title={title}
            content={indexContent}
            delete={removeNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
