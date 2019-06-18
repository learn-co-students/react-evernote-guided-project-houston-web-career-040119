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
  constructor(props){
    super(props)
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

  updateBackend = (e,myID, title, body) => {
    let id = myID
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: title,
          body: body
      })
    })
    .then(res => res.json())
    .then(console.log)
    .then(this.setState({

    }))
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.props.notes} editnotes={this.editnotes} selectedNote={this.state.selectedNote}/>
          {this.state.isShowing 
          ?<Content updateBackend={this.updateBackend} editnotes={this.editnotes} notes={this.props.notes} selectedNote={this.state.selectedNote} />
        : null
        }
          
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;