import { useState } from 'react';

const Vacaciones = () => {
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, empleado: "María González", dias: 15, estado: "Aprobado" },
    { id: 2, empleado: "Carlos Rojas", dias: 10, estado: "Pendiente" }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Solicitudes de Vacaciones</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {solicitudes.map(sol => (
          <div key={sol.id} style={{ 
            padding: '15px', 
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: sol.estado === 'Aprobado' ? '#e6ffe6' : '#fffae6'
          }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{sol.empleado}</h4>
            <p style={{ margin: '5px 0' }}>Días: {sol.dias}</p>
            <p style={{ 
              margin: '5px 0',
              color: sol.estado === 'Aprobado' ? 'green' : 'orange'
            }}>
              Estado: {sol.estado}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacaciones;