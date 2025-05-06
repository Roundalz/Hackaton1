import React from 'react';

const boletas = [
  {
    id: 1,
    nombre: 'Ana Gómez',
    cargo: 'Analista',
    mes: 'Abril',
    año: 2025,
    bruto: 2500,
    deducciones: 300,
    neto: 2200
  },
  {
    id: 2,
    nombre: 'Luis Pérez',
    cargo: 'Desarrollador',
    mes: 'Abril',
    año: 2025,
    bruto: 3000,
    deducciones: 400,
    neto: 2600
  }
];

export default function BoletasPago() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Boletas de Pago</h1>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Funcionario</th>
            <th className="p-2 border">Cargo</th>
            <th className="p-2 border">Mes</th>
            <th className="p-2 border">Año</th>
            <th className="p-2 border">Salario Bruto</th>
            <th className="p-2 border">Deducciones</th>
            <th className="p-2 border">Salario Neto</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {boletas.map((b) => (
            <tr key={b.id} className="hover:bg-gray-50">
              <td className="p-2 border">{b.nombre}</td>
              <td className="p-2 border">{b.cargo}</td>
              <td className="p-2 border">{b.mes}</td>
              <td className="p-2 border">{b.año}</td>
              <td className="p-2 border">${b.bruto.toFixed(2)}</td>
              <td className="p-2 border">${b.deducciones.toFixed(2)}</td>
              <td className="p-2 border">${b.neto.toFixed(2)}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Ver más
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
