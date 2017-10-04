import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import header from './components/Header.js';
import GraphCatalog from './components/GraphCatalog.js';

import kindergarten from '../data/kindergartners_in_full_day_program.js';

let districtObj = new DistrictRepository(kindergarten)

class App extends Component {
  constructor() {
    super()
    this.state = {
      schoolDistricts: districtObj.findAllMatches()
    }
  }

  render() {
    return (
      <div>
        <header />
        <GraphCatalog schoolDistricts={this.state.schoolDistricts} />
      </div>            
    )
  }
}

export default App;
