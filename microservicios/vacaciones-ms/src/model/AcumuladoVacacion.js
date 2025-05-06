const { query } = require('../config/db');

class AcumuladoVacacion {
  static async obtenerAcumulado(id_funcionario, gestion) {
    const result = await query(
      'SELECT * FROM Acumulado_Vacacion WHERE id_funcionario = $1 AND gestion = $2',
      [id_funcionario, gestion]
    );
    return result.rows[0];
  }

  static async actualizarDiasTomados(id_funcionario, gestion, dias) {
    const result = await query(
      'UPDATE Acumulado_Vacacion SET dias_tomados = dias_tomados + $1 WHERE id_funcionario = $2 AND gestion = $3 RETURNING *',
      [dias, id_funcionario, gestion]
    );
    return result.rows[0];
  }
}

module.exports = AcumuladoVacacion;