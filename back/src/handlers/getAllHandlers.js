const { getAll, getIdData } = require ('../controllers/getControllers')

async function getAllPlate (req, res) {
    let {name} = req.query
    try {
        const getPlates = await getAll(name);
		res.status(200).json(getPlates);
    } catch (error) {
        res.status(405).json({error: error.message});
    }
}





async function getId (req, res) {
    try {
        let {id} = req.params
        const getId = await getIdData(id)
        res.status(200).json(getId);
    } catch (error) {
        res.status(405).json({error: error.message});
    }
}

module.exports = {
    getAllPlate, 
    getId,
    
}