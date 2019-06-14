import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes: [],
      isLoading: false,
      isSelected: null
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users`)
    .then(res => res.json())
    .then(data => {
      // console.log(data[0].notes)
      this.setState({
        notes: data[0].notes,
        isLoading: true
      })
    })
  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="app">
        <Header />
        {this.state.isLoading === true ? <NoteContainer notes={this.state.notes}/> : 'Loading...'}
      </div>
    );
  }
}

export default App;
