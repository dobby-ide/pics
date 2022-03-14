import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID Rdo1CRpIk_Is6we_uArk0akPH6VTw2LiwhE__djwI74',
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubbbmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
};
export default App;
