import * as service from '../services/funcionarioService.js';

export const create = async (req, res) => {
  try {
    const func = await service.createFuncionario(req.body);
    res.status(201).json(func);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const list = async (_req, res) => {
  const list = await service.getAllFuncionarios();
  res.json(list);
};

export const getOne = async (req, res) => {
  const func = await service.getFuncionarioById(req.params.id);
  if (func) res.json(func);
  else res.status(404).json({ error: 'No encontrado' });
};

export const update = async (req, res) => {
  await service.updateFuncionario(req.params.id, req.body);
  res.json({ message: 'Actualizado' });
};

export const remove = async (req, res) => {
  await service.deleteFuncionario(req.params.id);
  res.json({ message: 'Eliminado' });
};

export const search = async (req, res) => {
  const { q } = req.query;
  const results = await service.searchByNameOrCI(q || '');
  res.json(results);
};
