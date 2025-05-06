import { useState } from 'react';

const Pagos = () => {
  const [boletas, setBoletas] = useState([
    { id: 1, empleado: "María González", monto: 5000, fecha: "2023-05-01" },
    { id: 2, empleado: "Carlos Rojas", monto: 4500, fecha: "2023-05-01" }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Boletas de Pago</h2>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {boletas.map(bol => (
          <li key={bol.id} style={{ 
            marginBottom: '10px', 
            padding: '10px', 
            border: '1px solid #eee',
            borderRadius: '5px'
          }}>
            <strong>{bol.empleado}</strong> - ${bol.monto} ({bol.fecha})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagos;