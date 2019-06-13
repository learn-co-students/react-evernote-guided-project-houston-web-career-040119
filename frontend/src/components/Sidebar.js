import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  constructor(){
    super()
    this.state = {
      isToggleOn: false
    }
  }

  handleClick(){
    this.setState({
      isToggleOn: !state.isToggleOn
    })
  }
  
  render() {
    // console.log(this.props.notes)
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes}/>
        <button onClick>New</button>
      </div>
    );
  }
}

export default Sidebar;
