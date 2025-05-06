import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Area } from './Area.js';

export const Cargo = sequelize.define('Cargo', {
  id_cargo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_area: {
    type: DataTypes.INTEGER, allowNull: false,
    references: { model: Area, key: 'id_area' }
  },
  nombre_cargo: { type: DataTypes.STRING(50), allowNull: false },
  descripcion: DataTypes.STRING(200)
}, {
  tableName: 'Cargo',
  timestamps: false
});

Area.hasMany(Cargo, { foreignKey: 'id_area', onDelete: 'CASCADE' });
Cargo.belongsTo(Area, { foreignKey: 'id_area' });
