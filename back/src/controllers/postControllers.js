const {Plate, Types} = require('../db.js');

const typesDiets = async (req, res) => {
	let tipos = ["Vegano", "Vegetariano", "Infantil", "Sin tac", " "]
	tipos.forEach(type => Types.findOrCreate({where: {name:type}}))

	const allTypes = await Types.findAll()
	res.send(allTypes)
}

const createProduct = async (
	name,
	ingredients,
	image,
	type,
) => {

	let create = await Plate.create({
		name,
		ingredients,
		image,
	});

	let TypeDiet = await Types.findAll({
		where:{
			name:type
		}
	})
	create.addTypes(TypeDiet)
	
	return (create);
};

module.exports = {
	createProduct,
	typesDiets
}