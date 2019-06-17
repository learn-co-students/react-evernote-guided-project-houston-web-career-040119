import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';





class Sidebar extends Component {
  constructor(){
    super()
    this.state = ({
isToggleOn: false
    })
  }

  // handleClick(e){
  //   this.setState({
  //     isToggleOn: !this.state.isToggleOn
  //   })
  // }

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
        {/* <button onClick={this.handleClick}>{this.state.isToggleOn ? form() :null */}

      {/* </button> */}
     <button onClick>CREATE NEW

     </button>
      </div>
    );
  }
}

export default Sidebar;