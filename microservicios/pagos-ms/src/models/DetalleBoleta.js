const { query } = require('../config/db');

class DetalleBoleta {
  static async create({ id_boleta, concepto, tipo, monto, descripcion }) {
    const result = await query(
      'INSERT INTO Detalle_Boleta (id_boleta, concepto, tipo, monto, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id_boleta, concepto, tipo, monto, descripcion]
    );
    return result.rows[0];
  }

  static async findByBoleta(id_boleta) {
    const result = await query(
      'SELECT * FROM Detalle_Boleta WHERE id_boleta = $1 ORDER BY tipo DESC, concepto ASC',
      [id_boleta]
    );
    return result.rows;
  }
}

module.exports = DetalleBoleta;