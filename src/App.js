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
    updatedCompare.push(selectedDistrict)
    if (this.state.districtsToCompare.length > 1) {
      districtObj.compareDistrictAverages(updatedCompare[0], updatedCompare[1])      
    }
    
    if (this.state.districtsToCompare.length > 2) {
      updatedCompare.shift()
      districtObj.compareDistrictAverages(updatedCompare[0], updatedCompare[1])
    }

    // updatedCompare.push(selectedDistrict)
    this.setState({ districtsToCompare: updatedCompare})
    // console.log(updatedCompare)
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
