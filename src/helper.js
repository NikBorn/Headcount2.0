export default class DistrictRepository {
    constructor(array) {
        this.data = this.createDataObj(array)
    }

    createDataObj(array) {
        return array.reduce((accu, current) => {
            if(!accu[current.Location]) {
                accu[current.Location] = {data: {}}
            }
            accu[current.Location].data[current.TimeFrame] = current.Data;
            return accu
            }, {})
        }

}