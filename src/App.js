import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import data from './data.json';
import Table from './components/Table/Table';

class App extends React.Component {
  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  state = {
    itemList: data,
    query: '',
  };
  render() {
    console.log(data);
    return (
      <div className="App">
        <h1>IronStore</h1>

        <SearchBar query={this.state.query} setQuery={this.setQuery} />
        <Table itemList={this.state.itemList} query={this.state.query} />
      </div>
    );
  }
}

export default App;
