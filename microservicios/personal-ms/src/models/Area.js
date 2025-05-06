import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Area = sequelize.define('Area', {
  id_area: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_area: { type: DataTypes.STRING(50), allowNull: false },
  descripcion: DataTypes.STRING(200)
}, {
  tableName: 'Area',
  timestamps: false
});
