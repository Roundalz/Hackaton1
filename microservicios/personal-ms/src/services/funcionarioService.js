import { Funcionario } from '../models/Funcionario.js';
import { Op } from 'sequelize';

export const createFuncionario = data => Funcionario.create(data);

export const getAllFuncionarios = () => Funcionario.findAll();

export const getFuncionarioById = id =>
  Funcionario.findByPk(id);

export const updateFuncionario = (id, data) =>
  Funcionario.update(data, { where: { id_funcionario: id } });

export const deleteFuncionario = id =>
  Funcionario.destroy({ where: { id_funcionario: id } });

export const searchByNameOrCI = term =>
  Funcionario.findAll({
    where: {
      [Op.or]: [
        { nombre_completo: { [Op.like]: `%${term}%` } },
        { documento_ci:    { [Op.like]: `%${term}%` } }
      ]
    }
  });
