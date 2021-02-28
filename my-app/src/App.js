import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list-component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
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
        <input type='search' placeholder='search monster' onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={this.state.monster} />



      </div>
    );

  }
}

export default App;
