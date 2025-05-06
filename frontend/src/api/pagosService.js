import api from './axiosConfig';

export const PagosService = {
  generarBoleta: async (boletaData) => {
    const response = await api.post('/pagos/boletas', boletaData);
    return response.data;
  },

  obtenerBoletasFuncionario: async (idFuncionario) => {
    const response = await api.get(`/pagos/funcionarios/${idFuncionario}/boletas`);
    return response.data;
  },

  obtenerDetallesBoleta: async (idBoleta) => {
    const response = await api.get(`/pagos/boletas/${idBoleta}/detalles`);
    return response.data;
  },

  crearPeriodo: async (periodoData) => {
    const response = await api.post('/pagos/periodos', periodoData);
    return response.data;
  },

  cerrarPeriodo: async (idPeriodo) => {
    const response = await api.put(`/pagos/periodos/${idPeriodo}/cerrar`);
    return response.data;
  },
};