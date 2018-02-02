import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange(string) {
    this.setState({ value: string }, 
      ()=>{ this.props.searchForDistricts(this.state.value) ; });
  }

  render(props) {
    return (
      
        <input className='search-bar'
               placeholder='search by district'
               value={this.state.value}
               onChange={(event)=>{
                 this.handleChange(event.target.value);
               }} />
      
    );
  }
}

Searchbar.propTypes = {
  searchForDistricts: PropTypes.func.isRequired
};