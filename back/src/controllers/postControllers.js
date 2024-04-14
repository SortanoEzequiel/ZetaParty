const {Plate, Types} = require('../db.js');

const typesDiets = async (req, res) => {
	let tipos = ["Vegano", "Vegetariano", "Infantil", "Sin tac", " "]
    tipos.forEach(type => Types.findOrCreate({ where:{name:type}}) )
	const allTypes = await Types.findAll()
	
	res.send(allTypes)
}

async function createProduct(req, res){
	const {price, name, description, image, type} = req.body
	console.log(req.body);
	try {
	    const dieta = await Plate.create({
		price,
		name,
		description,
		image,
		type,
	});

	
	res.send(dieta);
 } catch (error) {
	res.status(405).json({error: error.message});
 }
	
};

async function actualizarProduct(req, res){
	let { id } = req.params
	const {price, name, description, image, type} = req.body
	
	
	try {
	    const dieta = await Plate.update({
		name,
		price,
		description,
		image,
		type,
	},{
	
			where : {id : id}
		
	});

	
	res.send(dieta);
 } catch (error) {
	res.status(405).json({error: error.message});
 }
	
};

module.exports = {
	actualizarProduct,
	createProduct,
	typesDiets
}