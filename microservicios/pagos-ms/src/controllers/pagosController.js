const httpStatus = require('http-status-codes');
const PagosService = require('../services/pagosService');
const logger = require('../config/logger');

class PagosController {
  async crearPeriodo(req, res) {
    try {
      const periodo = await PagosService.crearPeriodo(req.body);
      logger.info(`Nuevo período creado: ${periodo.id_periodo}`);
      res.status(httpStatus.StatusCodes.CREATED).json({
        success: true,
        data: periodo,
        message: 'Período de pago creado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al crear período: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al crear período de pago',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }

  async cerrarPeriodo(req, res) {
    try {
      const periodo = await PagosService.cerrarPeriodo(req.params.id);
      if (!periodo) {
        return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Período no encontrado'
        });
      }
      logger.info(`Período cerrado: ${req.params.id}`);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: periodo,
        message: 'Período cerrado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al cerrar período: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al cerrar período'
      });
    }
  }

  async generarBoleta(req, res) {
    try {
      const boleta = await PagosService.generarBoleta(req.body);
      logger.info(`Boleta generada: ${boleta.id_boleta}`);
      res.status(httpStatus.StatusCodes.CREATED).json({
        success: true,
        data: boleta,
        message: 'Boleta generada exitosamente'
      });
    } catch (error) {
      logger.error(`Error al generar boleta: ${error.message}`);
      res.status(httpStatus.StatusCodes.BAD_REQUEST).json({
        success: false,
        error: error.message || 'Error al generar boleta',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }

  async obtenerBoletasFuncionario(req, res) {
    try {
      const boletas = await PagosService.obtenerBoletasFuncionario(req.params.id_funcionario);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: boletas,
        count: boletas.length,
        message: 'Boletas recuperadas exitosamente'
      });
    } catch (error) {
      logger.error(`Error al obtener boletas: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al obtener boletas'
      });
    }
  }

  async obtenerBoleta(req, res) {
    try {
      const boleta = await PagosService.obtenerBoleta(req.params.id_boleta);
      if (!boleta) {
        return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Boleta no encontrada'
        });
      }
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: boleta
      });
    } catch (error) {
      logger.error(`Error al obtener boleta: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al obtener boleta'
      });
    }
  }

  async obtenerDetallesBoleta(req, res) {
    try {
      const detalles = await PagosService.obtenerDetallesBoleta(req.params.id_boleta);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: detalles,
        count: detalles.length,
        message: 'Detalles de boleta recuperados exitosamente'
      });
    } catch (error) {
      logger.error(`Error al obtener detalles: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al obtener detalles de boleta'
      });
    }
  }

  async eliminarBoleta(req, res) {
    try {
      const resultado = await PagosService.eliminarBoleta(req.params.id_boleta);
      if (!resultado) {
        return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Boleta no encontrada'
        });
      }
      logger.info(`Boleta eliminada: ${req.params.id_boleta}`);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        message: 'Boleta eliminada exitosamente'
      });
    } catch (error) {
      logger.error(`Error al eliminar boleta: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al eliminar boleta'
      });
    }
  }
}

module.exports = new PagosController();