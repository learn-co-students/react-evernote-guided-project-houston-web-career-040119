import React, { Component } from 'react';

class NoteEditor extends Component {




  deleteNote = (id) => {
    
    fetch(`http://localhost:3000/api/v1/notes/${id}`,{
      
method: "DELETE"
 })
    
  .then(() => {
    console.log('Removed')
  }).catch(err => {
    console.error(err)
  })
  
  }


  render() {
    console.log(this.props.selectedNote)
    return (
      <div>
      <form className="note-editor">
        <input type="text" name="title" value={this.props.selectedNote.title}  />

        <textarea name="body" value={this.props.selectedNote.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
          
          
          <button onClick={() => this.deleteNote(this.props.selectedNote.id)}>Delete</button>


        </div>
      </form>
      </div>
    );
  }
}

export default NoteEditor;