export default class DistrictRepository {
  constructor(data) {
    this.data = this.createDataObj(data);
  };

  compareDistrictAverages(district1, district2) {
    // console.log(district1, district2)
    let avg1=this.findAverage(district1.location)
    let avg2=this.findAverage(district2.location)
    console.log(avg1, avg2)

  }

  findAverage(location) {
    let district = this.findByName(location)
    let keys = Object.keys(district.data)
    // console.log(keys)
    let valuesArray = keys.map(key => {
        return district.data[key]
    })
    // console.log(valuesArray)
    let total = valuesArray.reduce((accu, current)=> {
      return accu + current;
    }, 0);
    let avg = total/11;
    // console.log(this.roundNumber(avg, 3))
    return this.roundNumber(avg, 3);
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
