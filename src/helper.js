export default class DistrictRepository {
  constructor(data) {
    this.data = this.createDataObj(data);
  };

  compareDistrictAverages(district1, district2) {
    console.log(district1, district2)
  }

  createDataObj(array) {
    return array.reduce((accu, current, i) => {
      if (!accu[current.Location]) {
        accu[current.Location] = {
          location: current.Location.toUpperCase(), 
          data: {},
          id: Date.now()+i
        };
      }
      accu[current.Location].data[current.TimeFrame] = this.roundNumber(current.Data, 3);
      return accu;
    }, {});        
  };

  findAllMatches(searchName) {
    let keys = Object.keys(this.data);        
    let possibleMatches = keys.map(district => this.data[district]);
    if(searchName) {
      return possibleMatches.filter(match => match.location.includes(searchName.toUpperCase()));
    };
    return possibleMatches;
    };

  findByName(searchName) {
    if (searchName) {
      let keys = Object.keys(this.data);
      let found = keys.find(location => location.toUpperCase() === searchName.toUpperCase());
      return this.data[found];
    };
  };

  roundNumber(value, decimals) {
    if ((typeof value) !== 'number') {
      return 0;
    };
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  };
};
