import React, { Component } from 'react';
import NoteList from './NoteList';





class Sidebar extends Component {
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
 
        <NoteList notes={this.props.notes}/>
        <button onClick>New</button>
      </div>
    );
  }
}

export default Sidebar;
