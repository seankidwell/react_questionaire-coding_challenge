import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.deleteFrom = this.deleteForm.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  deleteForm(index) {
    let list = this.state.list;
    list.splice(index,1);
    this.setState({list: list});
  }

  submit(e) {
    e.preventDefault();
    this.setState({list: [this.state.userInput, ...this.state.list]});
    this.setState({userInput: ''});
  };

  render() {

    let items = this.state.list.map((item, i) => {
      return (
        <div key={i} className='wholeForm'>
          <Form info={item}/>
          <button onClick={() => this.deleteForm(i)}>Delete</button>
        </div>
      )
    })

    return (
      <div className='App'>
        <h1>Form App</h1>
        <form onSubmit={this.submit}>
          <input type='text' name='userInput' placeholder='Type Here' value={this.state.userInput} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <div className='list'>
          {items}
        </div>
      </div>
    );
  }
}

export default App;
