const { query } = require('../config/db');

class TipoContrato {
  static async create({ nombre, descripcion, duracion_meses, parametros_template }) {
    const result = await query(
      'INSERT INTO Tipo_Contrato (nombre, descripcion, duracion_meses, parametros_template) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, descripcion, duracion_meses, parametros_template]
    );
    return result.rows[0];
  }

  static async findAll() {
    const result = await query('SELECT * FROM Tipo_Contrato');
    return result.rows;
  }
}

module.exports = TipoContrato;