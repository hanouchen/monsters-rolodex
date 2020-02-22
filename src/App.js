import React, { Component } from 'react';
import { CardList } from './components/card-list/car-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// import logo from './logo.svg';
import './App.css';

class MyApp extends Component {
  constructor () {
    super();
    
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users', {mode: 'cors'})
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => { console.log(error); });
  }

  handleChange = (e) => this.setState({ searchField: e.target.value});

  render () { 
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox placeholder='search monsters' onChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default MyApp;
