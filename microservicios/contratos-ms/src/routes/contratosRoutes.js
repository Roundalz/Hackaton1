const express = require('express');
const router = express.Router();
const ContratosController = require('../controllers/contratosController');

router.post('/tipos', ContratosController.crearTipoContrato);
router.get('/tipos', ContratosController.listarTiposContrato);
router.post('/contratos', ContratosController.crearContrato);
router.get('/funcionarios/:id_funcionario/contratos', ContratosController.obtenerContratosFuncionario);

module.exports = router;