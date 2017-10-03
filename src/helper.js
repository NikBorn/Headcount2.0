export default class DistrictRepository {
    constructor(array) {
        this.data = this.createDataObj(array)
    }

    createDataObj(array) {
        return array.reduce((accu, current) => {
            if(!accu[current.Location]) {
                accu[current.Location] = {location: current.Location.toUpperCase(), data: {}}
            }
            accu[current.Location].data[current.TimeFrame] = current.Data;
            return accu
            }, {})
        }

    findByName(name) {
        if (name) {
            let keys = Object.keys(this.data)
            let found = keys.find(location => location.toUpperCase() === name.toUpperCase())
            console.log(this.data[found])
            return this.data[found]
        }
        }





}
