const {Plate, Types} = require('../db.js');

const typesDiets = async (req, res) => {
	let tipos = ["Vegano", "Vegetariano", "Infantil", "Sin tac", " "]
    tipos.forEach(type => Types.findOrCreate({ where:{name:type}}) )
	const allTypes = await Types.findAll()
	
	res.send(allTypes)
}

async function createProduct(req, res){
	const {price, name, ingredients, image, typeDiet} = req.body
	console.log(req.body);
	try {
	    const dieta = await Plate.create({
		price,
		name,
		ingredients,
		image,
		typeDiet
	});

	
	res.send(dieta);
 } catch (error) {
	res.status(405).json({error: error.message});
 }
	
};

module.exports = {
	createProduct,
	typesDiets
}