const express = require('express');
const router = express.Router();
const PagosController = require('../controllers/pagosController');
const { validarDatosPeriodo, validarDatosBoleta } = require('../middlewares/validacionPagos');

// Gestión de Periodos
router.route('/periodos')
  .post(validarDatosPeriodo, PagosController.crearPeriodo);

router.route('/periodos/:id/cerrar')
  .put(PagosController.cerrarPeriodo);

// Gestión de Boletas
router.route('/boletas')
  .post(validarDatosBoleta, PagosController.generarBoleta);

router.route('/funcionarios/:id_funcionario/boletas')
  .get(PagosController.obtenerBoletasFuncionario);

router.route('/boletas/:id_boleta')
  .get(PagosController.obtenerBoleta)
  .delete(PagosController.eliminarBoleta);

router.route('/boletas/:id_boleta/detalles')
  .get(PagosController.obtenerDetallesBoleta);

module.exports = router;