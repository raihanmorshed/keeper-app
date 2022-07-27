import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;


// import React, {useState} from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// // import notes from "./notes";
// import CreateArea from "./CreateArea";

// // function createNote(singleNote){
// //     return(
// //         <Note 
// //             key={singleNote.key}
// //             title={singleNote.title}
// //             content={singleNote.content}
// //         />

// //     );
// // }
// // changing to arraow function below

//     function App(){
//     return (
//     <div>
//         <Header />
//         {notes.map(singleNote => {
//     return(
//         <Note 
//             key={singleNote.key}
//             title={singleNote.title}
//             content={singleNote.content}
//         />

//     );
// })}
//         <Footer />
//     </div>
//     );
// }



// export default App;