const { getAll } = require ('../controllers/getControllers')

async function getAllPlate (req, res) {
    try {
        const getPlates = await getAll();
		res.status(200).json(getPlates);
    } catch (error) {
        res.status(405).json({error: error.message});
    }
}

module.exports = {
    getAllPlate
}