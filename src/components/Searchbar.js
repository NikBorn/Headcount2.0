import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange(string) {
    this.setState({ value: string }, ()=>{ this.props.searchForDistricts(this.state.value) ;});
  }

  render(props) {
    return (
      
        <input className='search-bar'
               placeholder='search by district'
               value={this.state.value}
               onChange={(e)=>{
                 this.handleChange(e.target.value);
               }} />
      
    );
  }
}

// const Searchbar = ({ searchForDistricts }) => {
//   return (
    
//       <input className='search-bar'
//              placeholder='search by district'
//              onChange={(e)=>{
//                e.preventDefault();
//                searchForDistricts(e.target.value)
//              }} />
    
//   );
// }

// export default Searchbar;
