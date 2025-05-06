// src/pages/Contratos.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contratos = () => {
  const [contratos, setContratos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener contratos desde la API
  useEffect(() => {
    const fetchContratos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contratos');
        setContratos(response.data);
      } catch (error) {
        console.error('Error fetching contratos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContratos();
  }, []);

  if (loading) return <div>Cargando contratos...</div>;

  return (
    <div className="contratos-container">
      <h1>Gestión de Contratos</h1>
      
      <div className="header-actions">
        <Link to="/contratos/nuevo" className="btn btn-primary">
          Crear Nuevo Contrato
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Funcionario</th>
              <th>Tipo</th>
              <th>Fecha Inicio</th>
              <th>Salario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((contrato) => (
              <tr key={contrato.id_contrato}>
                <td>{contrato.codigo_contrato}</td>
                <td>{contrato.id_funcionario}</td>
                <td>{contrato.id_tipo_contrato}</td>
                <td>{new Date(contrato.fecha_inicio).toLocaleDateString()}</td>
                <td>${contrato.salario.toFixed(2)}</td>
                <td>
                  <Link 
                    to={`/contratos/editar/${contrato.id_contrato}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Editar
                  </Link>
                  <button className="btn btn-sm btn-outline-danger ms-2">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contratos;