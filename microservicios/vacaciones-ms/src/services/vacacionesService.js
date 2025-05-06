const Vacacion = require('../models/Vacacion');
const AcumuladoVacacion = require('../models/AcumuladoVacacion');

class VacacionesService {
  async solicitarVacacion(data) {
    // Verificar días disponibles
    const gestion = new Date().getFullYear();
    const acumulado = await AcumuladoVacacion.obtenerAcumulado(data.id_funcionario, gestion);
    
    if (!acumulado || acumulado.dias_pendientes < data.dias_totales) {
      throw new Error('No tiene suficientes días de vacación disponibles');
    }

    return await Vacacion.create(data);
  }

  async aprobarVacacion(id) {
    const vacacion = await Vacacion.aprobar(id);
    
    // Actualizar días tomados
    const gestion = new Date(vacacion.fecha_inicio).getFullYear();
    await AcumuladoVacacion.actualizarDiasTomados(vacacion.id_funcionario, gestion, vacacion.dias_totales);
    
    return vacacion;
  }

  async obtenerVacacionesFuncionario(id_funcionario) {
    return await Vacacion.findByFuncionario(id_funcionario);
  }

  async obtenerAcumuladoFuncionario(id_funcionario, gestion) {
    return await AcumuladoVacacion.obtenerAcumulado(id_funcionario, gestion);
  }
}

module.exports = new VacacionesService();