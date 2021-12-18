const Sequelize = require('sequelize')
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('project', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		team: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "team",
				key: "id"
			}
		}
	}, {
		sequelize,
		tableName: 'project',
		timestamps: false,
		indexes: [
		{
			name: "PRIMARY",
			unique: true,
			using: "BTREE",
			fields: [
				{ name: "id" },
			]
		},
		{
			name: "fk_project_team_idx",
			using: "BTREE",
			fields: [
				{ name: "team" },
			]
		}
		]
	});
};