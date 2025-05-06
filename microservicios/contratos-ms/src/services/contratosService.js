const TipoContrato = require('../models/TipoContrato');
const Contrato = require('../models/Contrato');

class ContratosService {
  async crearTipoContrato(data) {
    return await TipoContrato.create(data);
  }

  async listarTiposContrato() {
    return await TipoContrato.findAll();
  }

  async crearContrato(data) {
    const contrato = await Contrato.create(data);
    // Generar documento del contrato
    contrato.documento_path = await Contrato.generarDocumento(contrato.id_contrato);
    return contrato;
  }

  async obtenerContratosFuncionario(id_funcionario) {
    return await Contrato.findByFuncionario(id_funcionario);
  }
}

module.exports = new ContratosService();