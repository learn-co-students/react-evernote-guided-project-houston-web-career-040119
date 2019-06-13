import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    // console.log(this.props.notes)
    const divStyle={
      overflowY: 'scroll',
      width:'500px',
      float: 'left',
      height:'750px',
      position:'relative'
    };

    return (
      <div className='master-detail-element sidebar' style={divStyle} >
        <NoteList notes={this.props.notes}/>
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
