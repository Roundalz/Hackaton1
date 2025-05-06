const httpStatus = require('http-status-codes');
const VacacionesService = require('../services/vacacionesService');

class VacacionesController {
  // Solicitar vacaciones
  async solicitarVacacion(req, res) {
    try {
        const vacacion = await VacacionesService.solicitarVacacion(req.body);
        logger.info(`Solicitud de vacación creada: ${vacacion.id_vacacion}`);
        res.status(httpStatus.StatusCodes.CREATED).json({
            success: true,
            data: vacacion
        });
    } catch (error) {
        logger.error(`Error al solicitar vacación: ${error.message}`);
        res.status(httpStatus.StatusCodes.BAD_REQUEST).json({
            success: false,
            error: error.message || 'Error al solicitar vacación',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}

// Aprobar vacación
async aprobarVacacion(req, res) {
    try {
        const vacacion = await VacacionesService.aprobarVacacion(req.params.id);
        if (!vacacion) {
            return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
                success: false,
                error: 'Solicitud de vacación no encontrada'
            });
        }
        logger.info(`Vacación aprobada: ${req.params.id}`);
        res.status(httpStatus.StatusCodes.OK).json({
            success: true,
            data: vacacion
        });
    } catch (error) {
        logger.error(`Error al aprobar vacación: ${error.message}`);
        res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: error.message || 'Error al aprobar vacación'
        });
    }
}

// Obtener vacaciones de un funcionario
async obtenerVacacionesFuncionario(req, res) {
    try {
        const vacaciones = await VacacionesService.obtenerVacacionesFuncionario(req.params.id_funcionario);
        res.status(httpStatus.StatusCodes.OK).json({
            success: true,
            data: vacaciones,
            count: vacaciones.length
        });
    } catch (error) {
        logger.error(`Error al obtener vacaciones: ${error.message}`);
        res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: error.message || 'Error al obtener vacaciones'
        });
    }
}

// Obtener acumulado de vacaciones
async obtenerAcumuladoFuncionario(req, res) {
    try {
        const gestion = req.query.gestion || new Date().getFullYear();
        const acumulado = await VacacionesService.obtenerAcumuladoFuncionario(
            req.params.id_funcionario, 
            gestion
        );
        
        if (!acumulado) {
            return res.status(httpStatus.StatusCodes.NOT_FOUND).json({
                success: false,
                error: 'No se encontró registro de vacaciones para este funcionario'
            });
        }
        
        res.status(httpStatus.StatusCodes.OK).json({
            success: true,
            data: acumulado
        });
    } catch (error) {
        logger.error(`Error al obtener acumulado: ${error.message}`);
        res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: error.message || 'Error al obtener acumulado de vacaciones'
        });
    }
}
}

module.exports = new VacacionesController();