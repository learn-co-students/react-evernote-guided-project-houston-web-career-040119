import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  render() {
    return (
      <div className='master-detail-element detail'>
       <NoteEditor editnotes={this.props.editnotes} selectedNote={this.props.selectedNote} />
        {/* {this.renderContent()} */}
        {/* <div>
          {this.props.e.target.value} */}
        {/* </div> */}
      </div>
    );
  }
}

export default Content;
