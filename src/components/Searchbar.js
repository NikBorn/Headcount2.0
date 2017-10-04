import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className='search-section'>
        <input className='search-bar'
               placeholder='search by district'
               onChange={(e)=>{
                 e.preventDefault();
                 this.props.searchForDistricts(e.target.value)
               }} />
      </div>
    );
  }
};

