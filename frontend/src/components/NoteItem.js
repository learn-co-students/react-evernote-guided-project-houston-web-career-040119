import React from 'react';
// import Content from './Content';
//props:note&editnotes
const NoteList = (props) => {
  
  return(
    <div>
    <ul className="list-group">
      <li className="list-group-item" onClick={()     => 
       
        {props.editnotes(props.note)}}>
        <h2><b>{props.note.title}</b></h2>
        <p><i>{props.note.body.substr(0,30) + "...."}</i></p>
      </li>
    </ul>
  </div>

  )
 
};

export default NoteList;
