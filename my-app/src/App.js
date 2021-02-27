import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list-component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [

      ]
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monster: user }))
  }

  render() {

    return (
      <div className="App">
        <CardList monsters={this.state.monster} />



      </div>
    );

  }
}

export default App;
