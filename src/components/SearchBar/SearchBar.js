import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  changeHandler = (event) => {
    console.log('event at sb', event.target.value);
    this.props.setQuery(event.target.value);
  };

  render() {
    return (
      <form>
        <label htmlFor="query">
          <button>Search</button>
        </label>
        <input
          type="text"
          name="query"
          id="query"
          value={this.props.query}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default SearchBar;
