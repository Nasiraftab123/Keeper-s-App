import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteText, setNoteText] = useState([]);
  function updateNote(notesArray) {
    setNoteText((prevValue) => [...prevValue, notesArray]);
  }
  function deleteNote(id) {
    setNoteText((prevValue) => {
      return prevValue.filter((noteText, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={updateNote} />
      {noteText.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            handleClick={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
