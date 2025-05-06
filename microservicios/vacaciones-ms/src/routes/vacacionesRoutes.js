const express = require('express');
const router = express.Router();
const VacacionesController = require('../controllers/vacacionesController');

router.post('/solicitudes', VacacionesController.solicitarVacacion);
router.put('/solicitudes/:id/aprobar', VacacionesController.aprobarVacacion);
router.get('/funcionarios/:id_funcionario/vacaciones', VacacionesController.obtenerVacacionesFuncionario);
router.get('/funcionarios/:id_funcionario/acumulado', VacacionesController.obtenerAcumuladoFuncionario);

module.exports = router;