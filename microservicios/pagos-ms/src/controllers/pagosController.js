const httpStatus = require('http-status-codes');
const PagosService = require('../services/pagosService');

class PagosController {
  async crearPeriodo(req, res) {
    try {
      const periodo = await PagosService.crearPeriodo(req.body);
      res.status(httpStatus.StatusCodes.CREATED).json(periodo);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async cerrarPeriodo(req, res) {
    try {
      const periodo = await PagosService.cerrarPeriodo(req.params.id);
      res.status(httpStatus.StatusCodes.OK).json(periodo);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async generarBoleta(req, res) {
    try {
      const boleta = await PagosService.generarBoleta(req.body);
      res.status(httpStatus.StatusCodes.CREATED).json(boleta);
    } catch (error) {
      res.status(httpStatus.StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  }

  async obtenerBoletasFuncionario(req, res) {
    try {
      const boletas = await PagosService.obtenerBoletasFuncionario(req.params.id_funcionario);
      res.status(httpStatus.StatusCodes.OK).json(boletas);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async obtenerDetallesBoleta(req, res) {
    try {
      const detalles = await PagosService.obtenerDetallesBoleta(req.params.id_boleta);
      res.status(httpStatus.StatusCodes.OK).json(detalles);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

module.exports = new PagosController();