import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import Header from './components/Header.js';
import GraphCatalog from './components/GraphCatalog.js';
import CompareDisplay from './components/CompareDisplay.js'

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

  toggleSelected(name) {
    let updatedState = this.state.schoolDistricts.slice()
    let selectedCard = districtObj.findByName(name)
    selectedCard.isSelected = !selectedCard.isSelected
    let selectedIndex = updatedState.indexOf(selectedCard)
    updatedState.splice(selectedIndex, 1, selectedCard)
    this.setState({
      schoolDistricts: updatedState
    })
  }

  handleSelected(name) {
    this.toggleSelected(name)
    let selectedDistrict = districtObj.findByName(name)
    let updatedCompare = [...this.state.districtsToCompare, selectedDistrict]
    
    if (updatedCompare.length > 2) {
      let removedCard = updatedCompare[0];
      this.toggleSelected(removedCard.location);
      updatedCompare.shift()
    }
    
    if (updatedCompare.length === 2) {
      districtObj.compareDistrictAverages(updatedCompare[0].location, updatedCompare[1].location) 
    }
    this.setState({ districtsToCompare: updatedCompare })
  }

  searchForDistricts(searchTerm) {
    this.setState({
      schoolDistricts: districtObj.findAllMatches(searchTerm)
    });
  }

  render() {
    return (
      <div>
        <Header searchForDistricts={ this.searchForDistricts } />
        <CompareDisplay />
        <GraphCatalog schoolDistricts={ this.state.schoolDistricts }
                      handleSelected={ this.handleSelected } />
      </div>            
    );
  }
}

export default App;
