const { query } = require('../config/db');

class Vacacion {
  static async create({ id_funcionario, fecha_inicio, fecha_fin, dias_totales, observaciones }) {
    const result = await query(
      `INSERT INTO Vacacion (id_funcionario, fecha_solicitud, fecha_inicio, fecha_fin, dias_totales, dias_disponibles, observaciones) 
       VALUES ($1, CURRENT_DATE, $2, $3, $4, $4, $5) RETURNING *`,
      [id_funcionario, fecha_inicio, fecha_fin, dias_totales, observaciones]
    );
    return result.rows[0];
  }

  static async aprobar(id) {
    const result = await query(
      'UPDATE Vacacion SET estado = \'Aprobado\', fecha_aprobacion = CURRENT_DATE WHERE id_vacacion = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }

  static async findByFuncionario(id_funcionario) {
    const result = await query(
      'SELECT * FROM Vacacion WHERE id_funcionario = $1 ORDER BY fecha_solicitud DESC',
      [id_funcionario]
    );
    return result.rows;
  }
}

module.exports = Vacacion;