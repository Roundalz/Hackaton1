import api from './axiosConfig';

export const ContratosService = {
  crearContrato: async (contratoData) => {
    const response = await api.post('/contratos/contratos', contratoData);
    return response.data;
  },

  obtenerContratosFuncionario: async (idFuncionario) => {
    const response = await api.get(`/contratos/funcionarios/${idFuncionario}/contratos`);
    return response.data;
  },

  crearTipoContrato: async (tipoData) => {
    const response = await api.post('/contratos/tipos', tipoData);
    return response.data;
  },

  listarTiposContrato: async () => {
    const response = await api.get('/contratos/tipos');
    return response.data;
  },
};