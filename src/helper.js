export default class DistrictRepository {
  constructor(data) {
    this.data = this.createDataObj(data);
  }

  compareDistrictAverages(dist1, dist2) {
    let district1 = this.findByName(dist1);
    let district2 = this.findByName(dist2);
    let avg1=this.findAverage(district1.location);
    let avg2=this.findAverage(district2.location);
    let comparedAvg=avg1/avg2;
    let avgObj = {
      [district1.location]: avg1,
      [district2.location]: avg2,
      'compared': this.roundNumber(comparedAvg, 3)
    };
    return avgObj;
  }

  findAverage(location) {
    let district = this.findByName(location);
    let keys = Object.keys(district.data);
    let valuesArray = keys.map(key => {
      return district.data[key];
    });
    let total = valuesArray.reduce((accu, current)=> {
      return accu + current;
    }, 0);
    let avg = total/11;
    return this.roundNumber(avg, 3);
  }

  createDataObj(array) {
    return array.reduce((accu, current, i) => {
      if (!accu[current.Location]) {
        accu[current.Location] = {
          location: current.Location.toUpperCase(), 
          data: {},
          id: Date.now()+i,
          isSelected: false         
        };
      }
      accu[current.Location].data[current.TimeFrame] = this.roundNumber(current.Data, 3);
      return accu;
    }, {});        
  }

  findAllMatches(searchName) {
    let keys = Object.keys(this.data);        
    let possibleMatches = keys.map(district => this.data[district]);
    if (searchName) {
      return possibleMatches.filter(match => match.location.includes(searchName.toUpperCase()));
    }
    return possibleMatches;
  }

  findByName(searchName) {
    if (searchName) {
      let keys = Object.keys(this.data);
      let found = keys.find(location => location.toUpperCase() === searchName.toUpperCase());
      return this.data[found];
    }
  }

  roundNumber(value, decimals) {
    if ((typeof value) !== 'number') {
      return 0;
    }
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
}
