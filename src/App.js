import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import Header from './components/Header.js';
import GraphCatalog from './components/GraphCatalog.js';
import CompareDisplay from './components/CompareDisplay.js';
import kindergarten from '../data/kindergartners_in_full_day_program.js';

let districtObj = new DistrictRepository(kindergarten)

class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolDistricts: districtObj.findAllMatches(),
      districtsToCompare: [],
      compareObj: {}
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

  shiftCompare(array) {
    this.toggleSelected(array[0].location)
    return array.filter(card => card !== array[0]);
  }

  handleSelected(name) {
    this.toggleSelected(name)
    let selectedDistrict = districtObj.findByName(name);
    let compareState = [...this.state.districtsToCompare];
    let addToCompare = [...compareState, selectedDistrict];
    let removeCompare = addToCompare.filter( card => card.location !== selectedDistrict.location);
    // let shiftCompare = addToCompare.filter(card => card !== compareState[0]);
    let returnCompare = [];
    
    if (addToCompare.length > 2 ) {
      console.log()
      returnCompare = compareState.includes(selectedDistrict) ? removeCompare : this.shiftCompare(addToCompare);
      
      console.log(returnCompare)
    }

    if (addToCompare.length <= 2) {
      returnCompare = addToCompare;
      console.log(returnCompare)
    }

    this.setState({ districtsToCompare: returnCompare })
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
        {this.state.districtsToCompare.length && 
          <CompareDisplay compareObj={this.state.compareObj}
                        compareArray={this.state.districtsToCompare}
                      handleSelected={this.handleSelected}  />}
        
        <GraphCatalog schoolDistricts={ this.state.schoolDistricts }
                      handleSelected={ this.handleSelected } />
      </div>            
    );
  }
}

export default App;
