import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setNotes]=useState([]);
    function addNote(note){
        setNotes([...notes,note]);
    }
    function deleteNote(IndexNote){
        setNotes(notes.filter((note,index)=>{
            return index!== IndexNote; 
        }))
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note,index)=>{
        return <Note key={index} id={index}  title={note.title} content={note.content} delete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
