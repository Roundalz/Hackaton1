import { useState } from 'react';

const Personal = () => {
  const [empleados, setEmpleados] = useState([
    { id: 1, nombre: "María González", cargo: "Desarrollador", salario: 5000 },
    { id: 2, nombre: "Carlos Rojas", cargo: "Diseñador", salario: 4500 }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestión de Personal</h2>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nombre</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Cargo</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Salario</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map(emp => (
            <tr key={emp.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{emp.nombre}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{emp.cargo}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>${emp.salario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Personal;