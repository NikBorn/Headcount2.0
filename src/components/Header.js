import React from 'react';
import Searchbar from './Searchbar.js';
import PropTypes from 'prop-types';


const Header = ({ searchForDistricts }) => {
  return (
    <header className='header'>
        <h1>Headcount</h1>
        <Searchbar searchForDistricts={ searchForDistricts } />
    </header>
  );
};

Header.PropTypes = {
  searchForDistricts: PropTypes.func.isRequired
};

export default Header;