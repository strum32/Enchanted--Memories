import api from './api-config';

export const getAllRides = async () => {
  const resp = await api.get('/rides');
  return resp.data;
}

export const getOneRide = async (id) => {
  const resp = await api.get(`/rides/${id}`);
  return resp.data;
}

