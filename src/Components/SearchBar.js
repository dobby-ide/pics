import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubbbmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              onChange={(event) => {
                this.setState({ term: event.target.value.toUpperCase() });
              }}
              value={this.state.term}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
