const {Plate, Types} = require('../db.js');

const getAll = async (name) => {
	let allData = await Plate.findAll()
	if(name){
		const plate = allData.filter((e) => e.name.toLowerCase().includes(name.toLowerCase())) 
		return plate
	}
   
    return allData
}




////////////////////////////////////////

let getIdData = async (id) => {
	const platesData = await getAll();

	let dataId = platesData.find((e) => e.id == id);

	if (dataId) {
		return dataId;
	} else {
		throw Error('Plato no encontrado');
	}
};


module.exports = {
    getAll,
    getIdData,
}