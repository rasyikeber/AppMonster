import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then
    (users=>this.setState({monsters:users}));
  }

 handleChange =(e) =>{
this.setState({ searchField: e.target.value });
 }
 



  render() {

    const {monsters,searchField} = this.state;
    const filterdMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster</h1>
       {/* <input
        type='sraech' 
        placeholder = 'search monsters'
        onChange = {e=>this.setState({searchField: e.target.value})}
    
    /> */}
       <SearchBox
      placeholder="search monsters"
      handleChange={this.handleChange}
/>

        
        <CardList monsters={filterdMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;