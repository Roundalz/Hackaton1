import api from './axiosConfig';

export const VacacionesService = {
  solicitarVacacion: async (vacacionData) => {
    const response = await api.post('/vacaciones/solicitudes', vacacionData);
    return response.data;
  },

  aprobarVacacion: async (id) => {
    const response = await api.put(`/vacaciones/solicitudes/${id}/aprobar`);
    return response.data;
  },

  obtenerVacacionesFuncionario: async (idFuncionario) => {
    const response = await api.get(`/vacaciones/funcionarios/${idFuncionario}/vacaciones`);
    return response.data;
  },

  obtenerAcumuladoFuncionario: async (idFuncionario, gestion) => {
    const response = await api.get(`/vacaciones/funcionarios/${idFuncionario}/acumulado`, {
      params: { gestion }
    });
    return response.data;
  },
};