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
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  submit(e) {
    e.preventDefault();
    this.setState({list: [this.state.userInput, ...this.state.list]});
    this.setState({userInput: ''})
    console.log(this.state.userInput, this.state.list);
  }

  render() {

    let items = this.state.list.map((item, i) => <Form info={item}/>)

    return (
      <div className='App'>
        <form onSubmit={this.submit}>
          <input type='text' name='userInput' value={this.state.userInput} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <div className='list'>
          {items}
          {/* {this.state.list} */}
        </div>
      </div>
    );
  }
}

export default App;
