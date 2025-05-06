const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const {
  proxyToPersonal,
  proxyToVacaciones,
  proxyToContratos,
  proxyToPagos
} = require('../controllers/gatewayController');

// Personal - CRUD completo
router.route('/personal/funcionarios')
  .get(authenticate, proxyToPersonal)
  .post(authenticate, proxyToPersonal);

router.route('/personal/funcionarios/:id')
  .get(authenticate, proxyToPersonal)
  .put(authenticate, proxyToPersonal)
  .patch(authenticate, proxyToPersonal)
  .delete(authenticate, proxyToPersonal);

// Vacaciones
router.route('/vacaciones/solicitudes')
  .get(authenticate, proxyToVacaciones)
  .post(authenticate, proxyToVacaciones);

router.route('/vacaciones/solicitudes/:id')
  .get(authenticate, proxyToVacaciones)
  .put(authenticate, proxyToVacaciones)
  .delete(authenticate, proxyToVacaciones);

router.put('/vacaciones/solicitudes/:id/aprobar', authenticate, proxyToVacaciones);

// Contratos
router.route('/contratos/tipos')
  .get(authenticate, proxyToContratos)
  .post(authenticate, proxyToContratos);

router.route('/contratos/contratos')
  .get(authenticate, proxyToContratos)
  .post(authenticate, proxyToContratos);

router.route('/contratos/contratos/:id')
  .get(authenticate, proxyToContratos)
  .put(authenticate, proxyToContratos)
  .delete(authenticate, proxyToContratos);

// Pagos
router.route('/pagos/periodos')
  .get(authenticate, proxyToPagos)
  .post(authenticate, proxyToPagos);

router.route('/pagos/boletas')
  .get(authenticate, proxyToPagos)
  .post(authenticate, proxyToPagos);

router.put('/pagos/periodos/:id/cerrar', authenticate, proxyToPagos);

module.exports = router;