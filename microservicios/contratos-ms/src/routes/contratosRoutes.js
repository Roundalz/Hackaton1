const httpStatus = require('http-status-codes');
const ContratosService = require('../services/contratosService');
const logger = require('../config/logger');

class ContratosController {
  async crearTipoContrato(req, res) {
    try {
      const tipo = await ContratosService.crearTipoContrato(req.body);
      logger.info(`Nuevo tipo de contrato creado por ${req.user.id}: ${tipo.id_tipo_contrato}`);
      res.status(httpStatus.StatusCodes.CREATED).json({
        success: true,
        data: tipo,
        message: 'Tipo de contrato creado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al crear tipo de contrato: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al crear tipo de contrato',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }

  async listarTiposContrato(req, res) {
    try {
      const tipos = await ContratosService.listarTiposContrato();
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: tipos,
        count: tipos.length,
        message: 'Tipos de contrato obtenidos exitosamente'
      });
    } catch (error) {
      logger.error(`Error al listar tipos de contrato: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al obtener tipos de contrato'
      });
    }
  }

  async crearContrato(req, res) {
    try {
      const contrato = await ContratosService.crearContrato({
        ...req.body,
        creado_por: req.user.id // Asignar el usuario que crea el contrato
      });
      logger.info(`Contrato creado para funcionario ${req.body.id_funcionario} por ${req.user.id}`);
      res.status(httpStatus.StatusCodes.CREATED).json({
        success: true,
        data: contrato,
        message: 'Contrato creado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al crear contrato: ${error.message}`);
      const status = error.message.includes('no encontrado') 
        ? httpStatus.StatusCodes.NOT_FOUND 
        : httpStatus.StatusCodes.BAD_REQUEST;
      res.status(status).json({
        success: false,
        error: error.message || 'Error al crear contrato'
      });
    }
  }

  async obtenerContratosFuncionario(req, res) {
    try {
      const contratos = await ContratosService.obtenerContratosFuncionario(req.params.id_funcionario);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: contratos,
        count: contratos.length,
        message: 'Contratos del funcionario obtenidos exitosamente'
      });
    } catch (error) {
      logger.error(`Error al obtener contratos: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al obtener contratos'
      });
    }
  }

  async obtenerContrato(req, res) {
    try {
      const contrato = await ContratosService.obtenerContrato(req.params.id_contrato);
      if (!contrato) {
        return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Contrato no encontrado'
        });
      }
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: contrato
      });
    } catch (error) {
      logger.error(`Error al obtener contrato ${req.params.id_contrato}: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al obtener contrato'
      });
    }
  }

  async actualizarContrato(req, res) {
    try {
      const contrato = await ContratosService.actualizarContrato(
        req.params.id_contrato, 
        req.body
      );
      if (!contrato) {
        return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Contrato no encontrado'
        });
      }
      logger.info(`Contrato ${req.params.id_contrato} actualizado por ${req.user.id}`);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: contrato,
        message: 'Contrato actualizado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al actualizar contrato: ${error.message}`);
      res.status(httpStatus.StatusCodes.BAD_REQUEST).json({
        success: false,
        error: error.message || 'Error al actualizar contrato'
      });
    }
  }

  async eliminarContrato(req, res) {
    try {
      const result = await ContratosService.eliminarContrato(req.params.id_contrato);
      if (!result) {
        return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
          success: false,
          error: 'Contrato no encontrado'
        });
      }
      logger.info(`Contrato ${req.params.id_contrato} eliminado por ${req.user.id}`);
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        message: 'Contrato eliminado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al eliminar contrato: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al eliminar contrato'
      });
    }
  }

  async generarDocumentoContrato(req, res) {
    try {
      const documento = await ContratosService.generarDocumentoContrato(
        req.params.id_contrato,
        req.user.id
      );
      res.status(httpStatus.StatusCodes.OK).json({
        success: true,
        data: documento,
        message: 'Documento de contrato generado exitosamente'
      });
    } catch (error) {
      logger.error(`Error al generar documento: ${error.message}`);
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: error.message || 'Error al generar documento de contrato'
      });
    }
  }
}

module.exports = new ContratosController();