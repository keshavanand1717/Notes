import React,{useState} from "react";

function CreateArea(props) {
  const [noteTitle,setTitle]=useState("");
  const [noteContent,setContent]=useState("");

  function handleTitle(event){
    const value = event.target.value;
    setTitle(value);
  }
  function handleContent(event){
    const value = event.target.value;
    setContent(value);
  }
  function avoidRerender(e){
    e.preventDefault();
  }
  return (
    <div>
      <form className="create-note" onSubmit={avoidRerender}>
        <input onChange={handleTitle} name="title" placeholder="Title" value={noteTitle} />
        <textarea onChange={handleContent} name="content" placeholder="Take a note..." rows="3" value={noteContent} />
        <button onClick={()=>{
          props.onAdd({noteTitle,noteContent})
          setTitle("");
          setContent("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
