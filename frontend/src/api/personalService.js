import api from './axiosConfig';

export const PersonalService = {
  // Funcionarios
  listarFuncionarios: async () => {
    const response = await api.get('/personal/funcionarios');
    return response.data;
  },

  obtenerFuncionario: async (id) => {
    const response = await api.get(`/personal/funcionarios/${id}`);
    return response.data;
  },

  crearFuncionario: async (funcionarioData) => {
    const response = await api.post('/personal/funcionarios', funcionarioData);
    return response.data;
  },

  actualizarFuncionario: async (id, updates) => {
    const response = await api.put(`/personal/funcionarios/${id}`, updates);
    return response.data;
  },

  darDeBajaFuncionario: async (id) => {
    const response = await api.delete(`/personal/funcionarios/${id}`);
    return response.data;
  },

  // Áreas y Cargos
  listarAreas: async () => {
    const response = await api.get('/personal/areas');
    return response.data;
  },

  obtenerCargosPorArea: async (idArea) => {
    const response = await api.get(`/personal/areas/${idArea}/cargos`);
    return response.data;
  },

  asignarCargo: async (asignacionData) => {
    const response = await api.post('/personal/asignaciones', asignacionData);
    return response.data;
  },
};