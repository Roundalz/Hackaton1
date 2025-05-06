const express = require('express');
const router = express.Router();
const VacacionesController = require('../controllers/vacacionesController');

// CRUD completo de solicitudes de vacaciones
router.route('/solicitudes')
  .get(VacacionesController.listarSolicitudes)       // GET /vacaciones/solicitudes (lista todas)
  .post(VacacionesController.solicitarVacacion);     // POST /vacaciones/solicitudes (crear)

router.route('/solicitudes/:id')
  .get(VacacionesController.obtenerSolicitud)        // GET /vacaciones/solicitudes/1 (una solicitud)
  .put(VacacionesController.actualizarSolicitud)     // PUT /vacaciones/solicitudes/1 (actualizar)
  .delete(VacacionesController.cancelarSolicitud);   // DELETE /vacaciones/solicitudes/1 (cancelar)

// Endpoint específico para aprobar (alternativa)
router.put('/solicitudes/:id/aprobar', VacacionesController.aprobarVacacion);

// Obtener vacaciones y acumulado por funcionario
router.get('/funcionarios/:id_funcionario/vacaciones', VacacionesController.obtenerVacacionesFuncionario);
router.get('/funcionarios/:id_funcionario/acumulado', VacacionesController.obtenerAcumuladoFuncionario);

module.exports = router;