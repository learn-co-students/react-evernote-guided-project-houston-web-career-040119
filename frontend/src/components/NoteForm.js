import React, { Component } from 'react';


class NoteForm extends Component {
constructor(){
    super()
    this.state = {
       title:'',
        body:''
        
    }
}
handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/notes`,{
method: "POST",
headers: {
'Content-Type': 'application/json'
},//headers
body: JSON.stringify({
    title:this.state.title,
    body:this.state.body,
    
})
    })
    .then(res => res.json())
    .then(obj => {
        console.log(obj)
     this.props.addNotes(obj)

    })
    .then(
        e.target.reset()
    )
    
}

setInput = (e) => {
  e.preventDefault()
    this.setState({
        
     [e.target.name]: e.target.value
   
    })
  }

render(){return(
    <div>
    <h3>Add Note!</h3>

    <form onSubmit={this.handleFormSubmit}>
         <input
    inputType="text"
    title="Title"
    name="title"
    placeholder="Enter the title"
    onChange={(e) => this.setInput(e)}/>
    
    <input 
    inputType="text"
    title="Description"
    name="body"
    placeholder="Enter the description" 
    onChange={(e) => this.setInput(e)} />
    <button action={this.handleClearForm} type="primary" title="Submit">SUBMIT</button>

    </form>

  </div>
)
}
    

        

   




}//class
export default NoteForm