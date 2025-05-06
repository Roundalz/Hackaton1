import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import { Funcionario } from './Funcionario.js';
import { Cargo } from './Cargo.js';

export const FuncionarioCargo = sequelize.define('Funcionario_Cargo', {
  id_funcionario_cargo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_funcionario: {
    type: DataTypes.INTEGER, allowNull: false,
    references: { model: Funcionario, key: 'id_funcionario' }
  },
  id_cargo: {
    type: DataTypes.INTEGER, allowNull: false,
    references: { model: Cargo, key: 'id_cargo' }
  },
  fecha_asignacion: { type: DataTypes.DATEONLY, allowNull: false },
  fecha_finalizacion: DataTypes.DATEONLY,
  activo: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
  tableName: 'Funcionario_Cargo',
  timestamps: false
});

// Relaciones
Funcionario.hasMany(FuncionarioCargo, { foreignKey: 'id_funcionario', onDelete: 'CASCADE' });
Cargo.hasMany(FuncionarioCargo, { foreignKey: 'id_cargo', onDelete: 'CASCADE' });
FuncionarioCargo.belongsTo(Funcionario, { foreignKey: 'id_funcionario' });
FuncionarioCargo.belongsTo(Cargo, { foreignKey: 'id_cargo' });
