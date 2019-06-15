import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

// renderContent = () => {
  //   if (false) {
  //     return <NoteEditor />;
  //   } else if (false) {
  //     return <NoteViewer />;
  //   } else {
  //     return <Instructions />;
  //   }
  // }

class NoteContainer extends Component {
constructor(){
  super()
  this.state = {
    selectedNote: null,
    isShowing : false
  }
  }

  editnotes = (note) => {
    
    this.setState({
    selectedNote: note,
    isShowing: true
  })
 
}

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.props.notes} editnotes={this.editnotes} selectedNote={this.state.selectedNote}/>
          {this.state.isShowing 
          ?<Content editnotes={this.editnotes} notes={this.props.notes} selectedNote={this.state.selectedNote} />
        : null
        }
          
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;