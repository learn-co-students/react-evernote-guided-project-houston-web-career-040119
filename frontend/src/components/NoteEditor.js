import React, { Component } from 'react';

class NoteEditor extends Component {
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
        </div>
      </form>
      </div>
    );
  }
}

export default NoteEditor;
