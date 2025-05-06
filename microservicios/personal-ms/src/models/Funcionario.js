import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Funcionario = sequelize.define('Funcionario', {
  id_funcionario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  documento_ci: { type: DataTypes.STRING(20), allowNull: false, unique: true },
  nombre_completo: { type: DataTypes.STRING(100), allowNull: false },
  fecha_nacimiento: DataTypes.DATEONLY,
  genero: DataTypes.STRING(20),
  direccion: DataTypes.STRING(200),
  telefono: DataTypes.STRING(20),
  email: DataTypes.STRING(100),
  fecha_ingreso: { type: DataTypes.DATEONLY, allowNull: false },
  activo: { type: DataTypes.BOOLEAN, defaultValue: true },
  fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'Funcionario',
  timestamps: false
});
