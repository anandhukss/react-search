import React, { Component } from "react";
import CardList  from "./components/card-list/card-list.component";
import Search from "./components/search/search-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:'',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ monsters: json }));
  }

  render() {
const {monsters,searchField}=this.state;
const filteredMonsters=monsters.filter((monster)=> monster.name.toLowerCase().includes(searchField.toLowerCase()))
const handleChange=(value)=>this.setState({searchField:value})


    return (
      <div className="App">
        <h1>Find Him</h1>
        <Search handleChange={handleChange}></Search>
       <CardList data={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
