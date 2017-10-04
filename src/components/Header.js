import React from 'react';
import Searchbar from './Searchbar.js'

const Header = ({ searchForDistricts }) => {
  return (
    <header className='header'>
        <h1>Headcount</h1>
        <Searchbar searchForDistricts={ searchForDistricts } />
    </header>
  );
};

export default Header;