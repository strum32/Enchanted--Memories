import api from './api-config';

export const getAllParks = async () => {
  const resp = await api.get('/parks');
  return resp.data;
}

export const getOnePark = async (id) => {
  const resp = await api.get(`/parks/${id}`);
  return resp.data;
}
