import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  onSearchbarSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 3dc36fc3c5393d3e652ca6bdd33cbc562e7a49f16328677f03975442cb6788ab'
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className='ui container'>
        <Searchbar onSubmit={this.onSearchbarSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
