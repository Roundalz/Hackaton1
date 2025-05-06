const { query } = require('../config/db');

class PeriodoPago {
  static async create({ nombre_periodo, fecha_inicio, fecha_fin }) {
    const result = await query(
      'INSERT INTO Periodo_Pago (nombre_periodo, fecha_inicio, fecha_fin) VALUES ($1, $2, $3) RETURNING *',
      [nombre_periodo, fecha_inicio, fecha_fin]
    );
    return result.rows[0];
  }

  static async cerrarPeriodo(id) {
    const result = await query(
      'UPDATE Periodo_Pago SET estado = \'Cerrado\' WHERE id_periodo = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }

  static async findCurrent() {
    const result = await query(
      'SELECT * FROM Periodo_Pago WHERE estado = \'Abierto\' AND fecha_fin >= CURRENT_DATE LIMIT 1'
    );
    return result.rows[0];
  }
}

module.exports = PeriodoPago;