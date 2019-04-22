import React, { Component } from 'react';

class Searchbar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Images</label>
            <input type='text' placeholder='Search' value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;