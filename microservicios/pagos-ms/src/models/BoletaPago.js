const { query } = require('../config/db');

class BoletaPago {
  static async create({ id_funcionario, id_periodo, fecha_pago, salario_bruto }) {
    const codigo = `BOL-${Date.now()}`;
    const result = await query(
      `INSERT INTO Boleta_Pago (id_funcionario, id_periodo, codigo_boleta, fecha_emision, fecha_pago, salario_bruto) 
       VALUES ($1, $2, $3, CURRENT_DATE, $4, $5) RETURNING *`,
      [id_funcionario, id_periodo, codigo, fecha_pago, salario_bruto]
    );
    return result.rows[0];
  }

  static async findByFuncionario(id_funcionario) {
    const result = await query(
      `SELECT b.*, p.nombre_periodo 
       FROM Boleta_Pago b JOIN Periodo_Pago p ON b.id_periodo = p.id_periodo 
       WHERE b.id_funcionario = $1 ORDER BY b.fecha_emision DESC`,
      [id_funcionario]
    );
    return result.rows;
  }

  static async generarDocumento(id) {
    const documentPath = `/boletas/boleta_${id}.pdf`;
    await query(
      'UPDATE Boleta_Pago SET documento_path = $1 WHERE id_boleta = $2 RETURNING *',
      [documentPath, id]
    );
    return documentPath;
  }
}

module.exports = BoletaPago;