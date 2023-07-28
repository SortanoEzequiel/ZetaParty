const {createProduct} = require("../controllers/postControllers")

async function postProductHandler (req, res){
	const {
		name,
		image,
		ingredients,
        typeId,
	} = req.body[0];
	try {
		const newProduct = await createProduct(
			name,
			ingredients,
			image,
			typeId,
		);
		res.status(200).json(newProduct);
	} catch (error) {
		res.status(405).json({error: error.message});
	}
};

module.exports = {
	postProductHandler,
}