const httpStatus = require('http-status-codes');
const ContratosService = require('../services/contratosService');

class ContratosController {
  async crearTipoContrato(req, res) {
    try {
      const tipo = await ContratosService.crearTipoContrato(req.body);
      res.status(httpStatus.StatusCodes.CREATED).json(tipo);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async listarTiposContrato(req, res) {
    try {
      const tipos = await ContratosService.listarTiposContrato();
      res.status(httpStatus.StatusCodes.OK).json(tipos);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async crearContrato(req, res) {
    try {
      const contrato = await ContratosService.crearContrato(req.body);
      res.status(httpStatus.StatusCodes.CREATED).json(contrato);
    } catch (error) {
      res.status(httpStatus.StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  }

  async obtenerContratosFuncionario(req, res) {
    try {
      const contratos = await ContratosService.obtenerContratosFuncionario(req.params.id_funcionario);
      res.status(httpStatus.StatusCodes.OK).json(contratos);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

module.exports = new ContratosController();