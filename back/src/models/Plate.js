const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'plate',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			price:{
				type:DataTypes.INTEGER,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ingredients: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: true,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			typeDiet:{
				type:DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			timestamps: false,
		}
	);
};