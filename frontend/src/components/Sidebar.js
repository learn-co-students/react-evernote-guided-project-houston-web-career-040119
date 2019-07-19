import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
// import NoteForm from './NoteForm';
// import NoteForm from './NoteForm';

class Sidebar extends Component {
  constructor(){
    super()
    this.state = ({
isToggleOn: false
    })
  }


  render() {
    const divStyle={
      overflowY: 'scroll',
      width:'500px',
      float: 'left',
      height:'750px',
      position:'relative'
    };
    // console.log(this.props.notes)
    return (
      <div className='master-detail-element sidebar' style={divStyle}>
 
        <NoteList notes={this.props.notes} editnotes={this.props.editnotes} />
     <button onClick={this.props.createNote}>CREATE NEW

     </button>
    
      </div>
    );
  }
}

export default Sidebar;
