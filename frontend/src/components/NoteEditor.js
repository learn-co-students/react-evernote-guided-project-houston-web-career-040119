import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: this.props.selectedNote.title,
      body: this.props.selectedNote.body
    }

    


  }

  

  handleChange = (e) => {
    e.preventDefault()
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log("HERE IS MY ID LOOK AT ME",this.props.selectedNote.id)
    let id = this.props.selectedNote.id
    this.props.updateBackend(e,id, this.state.title, this.state.body)
  }
  
  

  render() {
    
    return (
      <div>
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input type="text" name="title" defaultValue={this.state.title}  onChange={(e) => this.handleChange(e)}/>

        <textarea name="body" defaultValue={this.state.body} onChange={(e) => this.handleChange(e)}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
      </div>
    );
  }
}

export default NoteEditor;
