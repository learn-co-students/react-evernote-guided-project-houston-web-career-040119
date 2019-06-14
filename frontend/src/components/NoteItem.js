import React from 'react';
// import Content from './Content';


const NoteList = (props) => (
  <ul>
    <li>
    {/* <div 
    onClick={(e) => {
      <Content/>
    }}> */}
        <h2><b>{props.note.title}</b></h2>
    {/* </div> */}
        <p><i>{props.note.body.substr(0,30) + "...."}</i></p>
   </li>
  </ul>
  
);

export default NoteList;
