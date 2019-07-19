import React, { Component } from 'react';

class NoteEditor extends Component {


  constructor(props){
    super(props)
    this.state = {
      title: this.props.selectedNote.title,
      body: this.props.selectedNote.body,
      displayform:false
    }
  }


  handleChange = (e) => {
    e.preventDefault()
 
    this.setState({
      [e.target.name]: e.target.value,
      displayform:true
    })
  }
 
  handleSubmit = (e) => {
    console.log("HERE IS MY ID LOOK AT ME",this.props.selectedNote.id)
    let id = this.props.selectedNote.id
    this.props.updateBackend(e,id, this.state.title, this.state.body)
  }
  
  
  CancelNote = (e) => {
   e.preventDefault()
  
  }
  
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
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input type="text" name="title" defaultValue={this.state.title}  onChange={(e) => this.handleChange(e)}  />

        <textarea name="body" defaultValue={this.state.body} onChange={(e) => this.handleChange(e)}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />

          <button onClick={() => this.CancelNote}>Cancel</button>
          
          
          <button onClick={() => this.deleteNote(this.props.selectedNote.id)}>Delete</button>


        </div>
      </form>
      </div>
    );
  }
}

export default NoteEditor;