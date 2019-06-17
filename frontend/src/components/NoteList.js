import React from 'react';
import NoteItem from './NoteItem';


const NoteList = (props) => {
  console.log(props)
  return (
    <div>
       {props.notes.map(note=><NoteItem note={note}/>)}
    </div>
  );
}

export default NoteList;
