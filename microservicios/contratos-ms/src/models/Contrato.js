const { query } = require('../config/db');

class Contrato {
  static async create({ id_funcionario, id_tipo_contrato, fecha_inicio, salario, tiempo_prueba_dias, parametros_adicionales }) {
    const codigo = `CONT-${Date.now()}`;
    const result = await query(
      `INSERT INTO Contrato (id_funcionario, id_tipo_contrato, codigo_contrato, fecha_inicio, salario, tiempo_prueba_dias, parametros_adicionales) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [id_funcionario, id_tipo_contrato, codigo, fecha_inicio, salario, tiempo_prueba_dias, parametros_adicionales]
    );
    return result.rows[0];
  }

  static async findByFuncionario(id_funcionario) {
    const result = await query(
      `SELECT c.*, tc.nombre as tipo_contrato 
       FROM Contrato c JOIN Tipo_Contrato tc ON c.id_tipo_contrato = tc.id_tipo_contrato 
       WHERE c.id_funcionario = $1 ORDER BY c.fecha_inicio DESC`,
      [id_funcionario]
    );
    return result.rows;
  }

  static async generarDocumento(id) {
    // Lógica para generar documento PDF basado en template y parámetros
    const documentPath = `/contratos/contrato_${id}.pdf`;
    await query(
      'UPDATE Contrato SET documento_path = $1 WHERE id_contrato = $2 RETURNING *',
      [documentPath, id]
    );
    return documentPath;
  }
}

module.exports = Contrato;