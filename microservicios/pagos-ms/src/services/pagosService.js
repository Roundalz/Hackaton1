const PeriodoPago = require('../models/PeriodoPago');
const BoletaPago = require('../models/BoletaPago');
const DetalleBoleta = require('../models/DetalleBoleta');

class PagosService {
  async crearPeriodo(data) {
    return await PeriodoPago.create(data);
  }

  async cerrarPeriodo(id) {
    return await PeriodoPago.cerrarPeriodo(id);
  }

  async obtenerPeriodoActual() {
    return await PeriodoPago.findCurrent();
  }

  async generarBoleta({ id_funcionario, salario_bruto, descuentos = [], bonos = [] }) {
    const periodo = await this.obtenerPeriodoActual();
    if (!periodo) {
      throw new Error('No hay un periodo de pago activo');
    }

    const boleta = await BoletaPago.create({
      id_funcionario,
      id_periodo: periodo.id_periodo,
      fecha_pago: periodo.fecha_fin,
      salario_bruto
    });

    // Agregar descuentos
    for (const descuento of descuentos) {
      await DetalleBoleta.create({
        id_boleta: boleta.id_boleta,
        concepto: descuento.concepto,
        tipo: 'Descuento',
        monto: descuento.monto,
        descripcion: descuento.descripcion
      });
    }

    // Agregar bonos
    for (const bono of bonos) {
      await DetalleBoleta.create({
        id_boleta: boleta.id_boleta,
        concepto: bono.concepto,
        tipo: 'Bono',
        monto: bono.monto,
        descripcion: bono.descripcion
      });
    }

    // Generar documento PDF
    boleta.documento_path = await BoletaPago.generarDocumento(boleta.id_boleta);
    
    return boleta;
  }

  async obtenerBoletasFuncionario(id_funcionario) {
    return await BoletaPago.findByFuncionario(id_funcionario);
  }

  async obtenerDetallesBoleta(id_boleta) {
    return await DetalleBoleta.findByBoleta(id_boleta);
  }
}

module.exports = new PagosService();