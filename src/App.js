import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import Header from './components/Header.js';
import GraphCatalog from './components/GraphCatalog.js';

import kindergarten from '../data/kindergartners_in_full_day_program.js';

let districtObj = new DistrictRepository(kindergarten)

class App extends Component {
  constructor() {
    super()
    this.state = {
      schoolDistricts: districtObj.findAllMatches(),
      districtsToCompare: []
    };
    this.searchForDistricts = this.searchForDistricts.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
  }

  handleSelected(id) {
    let selectedDistrict = this.state.schoolDistricts.filter(district => {
      return district.id === id
    })[0]
    let updatedCompare = this.state.districtsToCompare
    if (this.state.districtsToCompare.length > 1) {
      updatedCompare.shift()
    }
    updatedCompare.push(selectedDistrict)
    console.log(updatedCompare)
  }

  searchForDistricts(searchTerm) {
    console.log('Hit!')
    console.log(searchTerm)
    this.setState({
      schoolDistricts: districtObj.findAllMatches(searchTerm)
    });
  }

  render() {
    return (
      <div>
        <Header searchForDistricts={ this.searchForDistricts } />
        <GraphCatalog schoolDistricts={ this.state.schoolDistricts }
                      handleSelected={ this.handleSelected } />
      </div>            
    );
  }
}

export default App;
