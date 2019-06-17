import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes: [],
      isLoading: false,

      displayNotes:[]
      // selectedNote: null
    }
  }

  
  SearchItem = (event) => {
    const value= event.target.value
    console.log(event.target.value)
    this.setState({
      displayNotes: this.state.notes.filter(note => note.title.toLowerCase().includes(value.toLowerCase()))
    })
  }


  addNotes = (note) => {
    // let arr = this.state.notes
    // arr.push(note)
    
    this.setState({
      notes: this.state.notes.push(note)
    }, ()=>{
      
      fetch(`http://localhost:3000/api/v1/notes`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        notes: data,
        isLoading: true,
        
        displayNotes:data
        // selectedNote: null
      })
    })

    })
    
  }


  componentDidMount(){
    // fetch(`http://localhost:3000/api/v1/users`)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data[0].notes)
    //   this.setState({
    //     notes: data[0].notes,
    //     isLoading: true,
        
    //     displayNotes:data[0].notes
    //     // selectedNote: null
    //   })
    // })
    fetch(`http://localhost:3000/api/v1/notes`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        notes: data,
        isLoading: true,
        
        displayNotes:data
        // selectedNote: null
      })
    })


  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="app">
        <Header />
        {this.state.isLoading === true ? <NoteContainer notes={this.state.displayNotes} searchNotes={this.SearchItem} addNotes={this.addNotes} /> : 'Loading...'} 
      </div>
    );
  }
}

export default App;
