import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([]);

  function AddNote(note){
    setNotes(prevNotes=>{return [...prevNotes,note];});
    
  }
  function Delete(id){
    //console.log(id);
    setNotes(prevNotes=>{return prevNotes.filter((note,index)=>{
      return index !== id;
     })
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote}/>
      {notes.map((note,key)=>{
        //console.log(key);
        return <Note id={key} title={note.noteTitle} content={note.noteContent} OnDelete={Delete}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
