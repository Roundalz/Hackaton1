const httpStatus = require('http-status-codes');
const VacacionesService = require('../services/vacacionesService');

class VacacionesController {
  async solicitarVacacion(req, res) {
    try {
      const vacacion = await VacacionesService.solicitarVacacion(req.body);
      res.status(httpStatus.StatusCodes.CREATED).json(vacacion);
    } catch (error) {
      res.status(httpStatus.StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
  }

  async aprobarVacacion(req, res) {
    try {
      const vacacion = await VacacionesService.aprobarVacacion(req.params.id);
      res.status(httpStatus.StatusCodes.OK).json(vacacion);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async obtenerVacacionesFuncionario(req, res) {
    try {
      const vacaciones = await VacacionesService.obtenerVacacionesFuncionario(req.params.id_funcionario);
      res.status(httpStatus.StatusCodes.OK).json(vacaciones);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async obtenerAcumuladoFuncionario(req, res) {
    try {
      const gestion = req.query.gestion || new Date().getFullYear();
      const acumulado = await VacacionesService.obtenerAcumuladoFuncionario(req.params.id_funcionario, gestion);
      res.status(httpStatus.StatusCodes.OK).json(acumulado);
    } catch (error) {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

module.exports = new VacacionesController();