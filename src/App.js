import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import Header from './components/Header.js';
import CardCatalog from './components/CardCatalog.js';
import CompareDisplay from './components/CompareDisplay.js';
import kindergarten from '../data/kindergartners_in_full_day_program.js';

let districtObj = new DistrictRepository(kindergarten);

class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolDistricts: districtObj.findAllMatches(),
      districtsToCompare: [],
      compareObj: {}
    };
    this.searchForDistricts = this.searchForDistricts.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.fetchCompareObj = this.fetchCompareObj.bind(this);
  }

  fetchCompareObj(dist1, dist2) {
    return districtObj.compareDistrictAverages(dist1, dist2);
  }

  toggleSelected(name) {
    let updatedState = this.state.schoolDistricts.slice();
    let selectedCard = districtObj.findByName(name);
    selectedCard.isSelected = !selectedCard.isSelected;
    let selectedIndex = updatedState.indexOf(selectedCard);
    updatedState.splice(selectedIndex, 1, selectedCard);
    this.setState({
      schoolDistricts: updatedState
    });
  }

  shiftCompare(array) {
    this.toggleSelected(array[0].location);
    return array.filter(card => card !== array[0]);
  }

  handleSelected(name) {
    this.toggleSelected(name);
    let selectedDistrict = districtObj.findByName(name);
    let compareState = [...this.state.districtsToCompare];
    let addToCompare = [...compareState, selectedDistrict];
    let removeCompare = addToCompare.filter( card => 
      card.location !== selectedDistrict.location);
    let returnCompare = [];
    let doesStateHaveDist = compareState.includes(selectedDistrict);
    
    if (addToCompare.length > 2 ) {
      returnCompare = doesStateHaveDist ? removeCompare : this.shiftCompare(addToCompare);
    }
    if (addToCompare.length <= 2) {
      returnCompare = doesStateHaveDist ? removeCompare : addToCompare;
    }

    this.setState({ districtsToCompare: returnCompare });
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
        <div className='space-holder'>
        </div>
        {this.state.districtsToCompare.length && 
          <CompareDisplay fetchCompareObj={this.fetchCompareObj}
                                compareArray={this.state.districtsToCompare}
                              handleSelected={this.handleSelected}  />}
        
        <CardCatalog schoolDistricts={ this.state.schoolDistricts }
                       handleSelected={ this.handleSelected } />
      </div>            
    );
  }
}

export default App;
