const {Plate, Types} = require('../db.js');

const getAll = async () => {
    let all = await Plate.findAll()
    return all
}


module.exports = {
    getAll
}