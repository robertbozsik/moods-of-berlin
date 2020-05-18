import React, { Component } from "react";

export default class Search extends Component {
  handleChange = (event) => {
    this.props.handleSearchBar(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="searchbar"
          value={this.props.searchbar}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
