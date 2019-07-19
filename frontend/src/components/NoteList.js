import React from 'react';
import NoteItem from './NoteItem';


const NoteList = (props) => {
  // debugger
  console.log(props)
  return (
    <div>
       {props.notes.map(note=><NoteItem key={note.id} note={note}  editnotes={props.editnotes}/>)}
       
    </div>
  );
}

export default NoteList;