export default class DistrictRepository {
    constructor(data) {
        this.data = this.createDataObj(data)
    }

    createDataObj(array) {
        return array.reduce((accu, current) => {
            if(!accu[current.Location]) {
                accu[current.Location] = {
                    location: current.Location.toUpperCase(), 
                    data: {}
                }
            }
            accu[current.Location].data[current.TimeFrame] = this.roundNumber(current.Data, 3);
            return accu
            }, {})        
        }

    findByName(searchName) {
        if (searchName) {
            let keys = Object.keys(this.data)
            let found = keys.find(location => location.toUpperCase() === searchName.toUpperCase())
            return this.data[found]
        }
        }

    roundNumber(value, decimals) {
        if ((typeof value) !== 'number') {
            return 0
        }
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
        }

}
