const {Plate, Types} = require('../db.js');
const db = require('../db.js');

const getAll = async (name) => {
	let allData = await db.Plate.findAll()
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
////////////////////////////////////////

let deletePlate = async(req, res) => {
	
	let { id } = req.params
	try {
		await Plate.destroy({
			where : {id : id}
		})
	let all = await getAll()
		res.send(all)
	} catch (error) {
		throw Error(error)
	}
	
}

module.exports = {
    getAll,
    getIdData,
	deletePlate,
}