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


  toggleSelected(name) {
    let updatedState = this.state.schoolDistricts.slice()
    console.log('updatedState: ', updatedState)
    let selectedCard = districtObj.findByName(name)
    selectedCard.isSelected = !selectedCard.isSelected
    let selectedIndex = updatedState.indexOf(selectedCard)
    console.log('index; ', selectedIndex)
    console.log('selected: ',selectedCard)
    updatedState.splice(selectedIndex, 1, selectedCard)
    this.setState({
      schoolDistricts: updatedState
    })
    // updatedState.
  }

  handleSelected(name) {
    this.toggleSelected(name)
    let selectedDistrict = districtObj.findByName(name)
    let updatedCompare = this.state.districtsToCompare
    updatedCompare.push(selectedDistrict)
    if (this.state.districtsToCompare.length > 1) {
      districtObj.compareDistrictAverages(updatedCompare[0].location, updatedCompare[1].location)      
    }
    
    if (this.state.districtsToCompare.length > 2) {
      updatedCompare.shift()
      districtObj.compareDistrictAverages(updatedCompare[0].location, updatedCompare[1].location)
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
