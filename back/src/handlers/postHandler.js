const {createProduct} = require("../controllers/postControllers")

async function postProductHandler (req, res){
	const {
		name,
		image,
		description,
        type,
	} = req.body[0];
	try {
		const newProduct = await createProduct(
			name,
			description,
			image,
			type,
		);
		res.status(200).json(newProduct);
	} catch (error) {
		res.status(405).json({error: error.message});
	}
};

module.exports = {
	postProductHandler,
}