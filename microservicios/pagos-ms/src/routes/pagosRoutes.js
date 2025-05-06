const express = require('express');
const router = express.Router();
const PagosController = require('../controllers/pagosController');

router.post('/periodos', PagosController.crearPeriodo);
router.put('/periodos/:id/cerrar', PagosController.cerrarPeriodo);
router.post('/boletas', PagosController.generarBoleta);
router.get('/funcionarios/:id_funcionario/boletas', PagosController.obtenerBoletasFuncionario);
router.get('/boletas/:id_boleta/detalles', PagosController.obtenerDetallesBoleta);

module.exports = router;